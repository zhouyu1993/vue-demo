需求

需求

———

开发

passenger-2923 小程序送乘时缺少「司机即将到达」这个提示

feat-passenger-4836 删了无用文件

———

转测

feat-passenger-5494
fix-passenger-5646
fix-passenger-5632
feat-passenger-4951

———

生产

feat-passenger-4868
feat-passenger-4942
feat-passenger-4999

bugfix_passenger-4622
fix-passenger-5004
fix-passenger-5005
fix-passenger-5014

———

U-APM 报错解决：a.replace is not a function
6581963337216、6581035726216

U-APM 报错解决：Cannot read property 'top' of null
6581035762216、6581963343216

———

0520

秦强波
小程序。友盟+U-APM，应用性能监控平台，集成。
小程序的后台登录方式：<https://apm.umeng.com/mini/dash/list>
taobq_t3go Tt256818

友盟后台 js 报错，sourceMap 定位方法。
uniapp 编译一遍，微信又编译一遍
所以需要生成 uniapp 的 sourceMap，同时下载微信的 sourceMap
但是目前测试，只能定位到页面级错误，如果出行分包调用主包方法，则无法解析

passenger-5494【小程序】小程序区域地址类型有多个 POI 时默认选择第一个子 POI
大型区域定位与 POI 相差太大，导致司机导航错误
passenger-5646【小程序】登录接口，定位失败时判断当前定位是否默认定位，是默认定位则不传经纬度
passenger-5632【小程序】【微信】限停 3 分钟 乘客 在等待司机接驾页 和 司机已达到页面 下方的联系客服、一键报警等按钮没了
passenger-4951【小程序】打通 APP 小程序公众号用户 ID（一期）
passenger-5357【小程序】【技改需求】api 层整改，并对适当的接口做数据 mock

———

0429

刘诗宜-TT 向上 0429 优化合集
小程序。通过图选修改出发地、目的地或途经点时，进入图选时不吸附。又说不做了
小程序。预估页面，APP 修改起点是直接跳转到图址修改页，小程序修改起点是跳转到地址选择页。小程序跟 APP 保持一致
小程序。预估页面，起终点箭头，接机起点不展示箭头，送机终点不展示箭头

邱文婷-自定义上车点用户链路体验优化
小程序。增加街景照片
小程序。步行引导
小程序。限停提醒

小程序。登录注册链路优化

小程序。打通 APP 小程序公众号用户 ID（一期）

秦强波
小程序线上问题：起终点 poiId 修正，只有高德搜索 POI 才有 poiId

张峰
小程序线上问题：首页、预估页，上车位置距离您当前位置的提醒丢失

董金刚
线上问题：首页、图址修改页，限停图标丢失

———

0408

刘诗宜-TT 向上 0408 优化合集
小程序。个人中兴、订单列表
小程序。首页个人头像

戴春昀-积分抵扣策略调整
H5

张峰
小程序线上问题：起终点 poiId 修正，采用高德的 poiId
小程序：小车气泡被起点遮挡
小程序：小车角度，小车被遮挡小车气泡

秦强波
小程序，体验优化。loading、骨架屏高度
小程序线上问题：H5 乘推乘，用户在 A 城市登录，跳到首页，定位在南京
小程序线上问题：首页、图址修改页，地理围栏，闭合多边形，丢失
小程序线上问题：图址修改页，点位颜色改透明
小程序线上问题：隐私页面按钮切换。<http://192.168.40.31/t3-web-frontend/passenger-miniapp-uni/-/commit/24602d89df39b530f3a8494c23c33899f4766b70#d5aa528ec4add5337de78cf1062bb062d6ca7e79_15_15>

———