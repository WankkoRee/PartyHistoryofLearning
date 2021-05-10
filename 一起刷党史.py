import time
from requests import Session
from json import dumps
from hashlib import md5, sha1
from random import randint
import hashids
from typing import Tuple

# 用户信息设置
device_info = ''  # 设备信息，抓包抓到整段复制过来就行，不要编码后的
user_id = 0  # 用户id
team_num = ""  # 不知道是啥，反正我是空的
randSleepTime = 3  # 最长多少秒后提交本题答案[0:9]，题目本身有读题时间（字数/10），不计算在内


# 以下勿动
def sign(data: dict) -> dict:
    keys = list(data.keys())
    keys.sort()
    s_data = "&".join([f'{key}={data[key]}' for key in keys])
    sign = sha1(f'{md5(s_data.encode()).hexdigest()}lanzu@123'.encode()).hexdigest()
    data['sign'] = sign
    return data

ss = Session()
preScore = [80, 80, 80, 80, 150]
h = hashids.Hashids(salt="leadfyy!gogogo")

def choose_user() -> int:
    ret = ss.post(
        url="https://xds.guanhaihk.com/api/game/choose_user",
        data=sign(
            {
                "user_id": user_id,
                "create_page": "pages/pvp/pvp",
                "timestamp": int(time.time()),
                "rand": randint(0, 1000000),
                "platform": "wxmini",
                "version": "2.0.6",
                "device_info": device_info
            }
        )
    ).json()
    assert ret['code'] == 0 and ret['msg'] == 'success'
    return ret['data']['pk_user']['id']


def start(pk_user_id) -> Tuple[int, list, list, str]:
    ret = ss.post(
        url="https://xds.guanhaihk.com/api/game/start",
        data=sign(
            {
                "type":"rank_user",
                "pk_user_id": pk_user_id,
                "create_page": "pages/pvp/pvp",
                "timestamp": int(time.time()),
                "rand": randint(0, 1000000),
                "user_id": user_id,
                "platform": "wxmini",
                "version": "2.0.6",
                "device_info": device_info,
                "enter_type": "not_rank_quanzi",
                "_pk_user_id": pk_user_id,
                "_type": "rank_user"
            }
        )
    ).json()
    assert ret['code'] == 0 and ret['msg'] == 'success'
    question_idsList = []
    sleeptime = []
    answer_idsList = []
    for q in ret['data']['questions']:
        question_idsList.append(q['id'])
        sleeptime.append(len(q['content']) // 10)
        for o in q['options']:
            if h.decode(o['is_answer'])[2] == 1:
                answer_idsList.append(q['id'])
                break
    answer_ids = ",".join([str(i) for i in answer_idsList])
    return ret['data']['pk_datas']['pk_info']['score'], question_idsList, sleeptime, answer_ids


def submit(pk_user_id, question_id, score, rightCount) -> bool:
    ret = ss.post(
        url="https://xds.guanhaihk.com/api/wrongQuestion/submit",
        data=sign(
            {
                "user_id": user_id,
                "question_id": question_id,
                "is_right": 1,
                "score": score,
                "rightCount": rightCount,
                "create_page": "pages/answer/answer",
                "timestamp": int(time.time()),
                "rand": randint(0, 1000000),
                "platform": "wxmini",
                "version": "2.0.6",
                "device_info": device_info,
                "enter_type": "not_rank_quanzi",
                "pk_user_id": pk_user_id,
                "type": "rank_user"
            }
        )
    ).json()
    return ret['code'] == 0 and ret['msg'] == '记录成功'


def submit_all(question_ids, times, score, score_ids, experience, is_win, answer_ids, right_counts) -> Tuple[str, int, int, int]:
    ret = ss.post(
        url="https://xds.guanhaihk.com/api/answer/submit_all",
        data=sign(
            {
                "question_ids": question_ids,
                "times": times,
                "score": score,
                "score_ids": score_ids,
                "experience": experience,
                "is_win": is_win,
                "answer_ids": answer_ids,
                "right_counts": right_counts,
                "user_id": user_id,
                "team_num": team_num,
                "create_page": "packageA/pages/closing/closing",
                "timestamp": int(time.time()),
                "rand": randint(0, 1000000),
                "platform": "wxmini",
                "version": "2.0.6",
                "device_info": device_info,
                "enter_type": "not_rank_quanzi"
            }
        )
    ).json()
    assert ret['code'] == 0 and ret['msg'] == '提交完成'
    return ret['data']['user']['expInfo']['name'], ret['data']['user']['expInfo']['lever'], ret['data']['user']['experience'], ret['data']['user']['expInfo']['next_min_score']

if __name__ == '__main__':
    while True:
        m_pk_user_id = choose_user()
        print("获取到对手", end=" ")
        m_pk_score, m_question_idsList, m_sleeptime, m_answer_ids = start(m_pk_user_id)
        print("获取到题目", end=" ")
        m_timesList = []
        m_score = 0
        m_score_idsList = []
        m_right_counts = 0
        for m_id, m_st in zip(m_question_idsList, m_sleeptime):
            m_usetime = randint(0, randSleepTime)
            m_timesList.append(m_usetime)
            m_sc = int(preScore[m_right_counts] * (10 - m_usetime) / 10)
            m_score += m_sc
            m_score_idsList.append(m_sc)
            time.sleep(m_st + m_usetime)
            m_right_counts += 1
            assert submit(m_pk_user_id, m_id, m_sc, m_right_counts)
            print(f"已答第{m_right_counts}题", end=" ")
        m_question_ids = ",".join([str(i) for i in m_question_idsList])
        m_times = ",".join([str(i) for i in m_timesList])
        m_score_ids = ",".join([str(i) for i in m_score_idsList])
        m_experience = int(m_score * 0.1 + max(0, m_right_counts - 1) + 5)
        m_is_win = 1 if m_score > m_pk_score else 0
        level, lever, exp, nextexp = submit_all(m_question_ids, m_times, m_score, m_score_ids, m_experience, m_is_win, m_answer_ids, m_right_counts)
        print(f"现在为{level} LV{lever}, 现有{exp}经验, 升级还需{nextexp - exp}经验")
        time.sleep(2)
