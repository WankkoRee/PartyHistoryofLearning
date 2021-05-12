# 一起刷党史

实现gqtzy的一起学党史小程序自动化

当前脚本对应小程序版本：![version](https://img.shields.io/badge/version-2.0.9-brightgreen)

## 使用说明

1. `clone`或下载本项目。

   项目中`一起刷党史.py`为可执行文件，其他为反编译小程序源码时留下的文件。

2. 安装`hashids`

   `pip install hashids`

3. 使用`Fiddler`等抓包程序抓取程序所需的个人数据。

   - `device_info`形如`{"albumAuthorized":true,"benchmarkLevel":-1,"bluetoothEnabled":false,"brand":"microsoft","cameraAuthorized":true,"fontSizeSetting":15,"language":"zh_CN","locationAuthorized":true,"locationEnabled":true,"microphoneAuthorized":true,"model":"microsoft","notificationAuthorized":true,"notificationSoundEnabled":true,"pixelRatio":1,"platform":"windows","power":100,"safeArea":{"bottom":692,"height":692,"left":0,"right":414,"top":0,"width":414},"screenHeight":736,"screenWidth":414,"statusBarHeight":20,"system":"Windows 10 x64","theme":"light","version":"7.0.9","wifiEnabled":true,"windowHeight":692,"windowWidth":414,"SDKVersion":"2.13.2","devicePixelRatio":1,"safeAreaInsets":{"top":0,"left":0,"right":0,"bottom":0}}`

   - `user_id`形如`123456`

4. 将获取到的个人数据填入`一起刷党史.py`

   ```python
   # 用户信息设置
   device_info = '{"albumAuthorized":true,"benchmarkLevel":-1,"bluetoothEnabled":false,"brand":"microsoft","cameraAuthorized":true,"fontSizeSetting":15,"language":"zh_CN","locationAuthorized":true,"locationEnabled":true,"microphoneAuthorized":true,"model":"microsoft","notificationAuthorized":true,"notificationSoundEnabled":true,"pixelRatio":1,"platform":"windows","power":100,"safeArea":{"bottom":692,"height":692,"left":0,"right":414,"top":0,"width":414},"screenHeight":736,"screenWidth":414,"statusBarHeight":20,"system":"Windows 10 x64","theme":"light","version":"7.0.9","wifiEnabled":true,"windowHeight":692,"windowWidth":414,"SDKVersion":"2.13.2","devicePixelRatio":1,"safeAreaInsets":{"top":0,"left":0,"right":0,"bottom":0}}'  # 设备信息，抓包抓到整段复制过来就行，不要编码后的
   user_id = 123456  # 用户id
   team_num = ""  # 团队号，如果加入了团队请额外填写此参数
   randSleepTime = 3  # 最长多少秒后提交本题答案[0:9]，题目本身有读题时间（字数/10），不计算在内
   ```

5. 运行`一起刷党史.py`

   `python 一起刷党史.py`

## 其他

- 欢迎提交issue。
