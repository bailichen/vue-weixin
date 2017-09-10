### 前言

这个项目是利用工作之余写的一个模仿微信app的单页面应用，整个项目包含27个页面，涉及实时群聊，机器人聊天，同学录，朋友圈等等，后续页面还是开发中。写这个项目主要目的是练习和熟悉vue和vuex的配合使用，利用socket.io实现实时聊天。

欢迎各路大神Issues

### 技术栈

```
vue2+vue-router+webpack+vuex+sass+svg构图+es6/7

```

### 项目运行

```
git clone https://github.com/bailichen/vue-weixin.git

cd vue-weixin

npm install

npm run dev (访问本地，运行后访问 http://localhost:8882)

```
### 效果演示 

[项目演示请点击这里](http://cangdu.org:8003/dialogue) （请用chrome手机模式预览）


### 移动端扫描下方二维码

![](https://github.com/bailichen/vue-weixin/raw/master/printscreen/code.png)

### 后台代码在这里
[后台代码](https://github.com/bailicangdu/node-weixin)

### 说明

> 本项目主要用于熟悉vue2+vuex的用法

> 如有问题请直接在Issues中提出，或加qq：812571880

> 如果觉得对您学习vue有点点帮助，请右上角star一下吧   ^_^

# 目标功能

- [x] 微信 
- [x] 通讯录
- [x] 通讯录右边导航功能
- [x] 发现 
- [x] 我
- [x] 设置
- [x] 新消息提醒
- [x] 勿扰模式
- [x] 聊天
- [x] widows 微信已登录
- [x] 搜索页
- [x] 对话页
- [x] 对话功能
- [x] 单人机器人智能对话页
- [x] 群聊
- [x] 朋友圈
- [x] 朋友圈点赞、评论
- [x] 个人中心
- [x] 详细资料
- [x] 更多
- [x] 个人相册
- [x] 更多
- [x] 收藏
- [x] 我的钱包
- [x] 购物
- [x] 设置
- [x] 登录

# 页面部分截图

### 单人聊天、群聊

<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/singlechat.gif" width="300" height="530" alt="">  <img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/groupchat.gif" width="300" height="530" alt="">


### 朋友圈

###### 上传图片、点赞

<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/shangchuan.gif" width="300" height="530"/> <img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/like.gif" width="300" height="530"/>

# 项目布局

```

├── README.md                                    // webpack配置文件
├── build                                        // 项目打包路径
├── config                                       // 上线项目文件，放在服务器即可正常访问
│   └── index.js
├── favicon.ico
├── index.html
├── package.json
├── printscreen
├── src                                          // 源码目录
│   ├── App.vue                                  // 页面入口文件
│   ├── components                               // 公共组件
│   │   ├── findandMe
│   │   │   └── findandMe.vue                    // 发现和我共同的模块的列表
│   │   ├── footer
│   │   │   └── foot.vue                         // 底部微信导航
│   │   └── header
│   │       └── head.vue                         // 头部公共组件
│   ├── config                                   // 基本配置
│   │   ├── env.js                               // 环境切换配置
│   │   ├── fetch.js                             // 获取数据
│   │   ├── iscroll.js 
│   │   ├── mUtils.js                            // 工具
│   │   ├── rem.js                               // px转换rem
│   │   ├── swiper.min.js                        // 轮播图控件
│   │   └── uploadPreview.js                     // 上传图片控件
│   ├── frames
│   │   ├── addressbook
│   │   │   ├── addressbook.vue                  // 通讯录
│   │   │   └── details
│   │   │       ├── details.vue                  // 详细资料
│   │   │       └── more
│   │   │           └── more.vue                 // 更多
│   │   ├── computer
│   │   │   └── computer.vue                     // pc端登录
│   │   ├── conversation
│   │   │   ├── chatmessage
│   │   │   │   ├── chatmessage.vue              // 单人聊天信息
│   │   │   │   └── groupchatmessage.vue         // 群聊聊天信息
│   │   │   ├── groupchat.vue                    // 群聊
│   │   │   └── singlechat.vue                   // 单人对话
│   │   ├── dialogue
│   │   │   └── dialogue.vue                     // 微信首页(对话列表页)
│   │   ├── find
│   │   │   ├── find.vue                         // 发现
│   │   │   ├── friendcircle
│   │   │   │   └── friendcircle.vue             // 朋友圈
│   │   │   └── miniapps
│   │   │       └── miniapps.vue                 // 小程序子页面
│   │   ├── me
│   │   │   ├── cardbag
│   │   │   │   └── cardbag.vue                  // 卡包
│   │   │   ├── collect
│   │   │   │   └── collect.vue                  // 我的收藏
│   │   │   ├── me.vue
│   │   │   ├── personaldetails
│   │   │   │   └── personaldetails.vue          // 个人信息
│   │   │   ├── photoalbum
│   │   │   │   └── photoalbum.vue               // 我的相册
│   │   │   ├── settings
│   │   │   │   ├── detailset
│   │   │   │   │   ├── aboutwc.vue              // 关于微信
│   │   │   │   │   ├── chat.vue                 // 聊天
│   │   │   │   │   ├── currency.vue             // 通用
│   │   │   │   │   ├── disturbance.vue          // 勿扰模式
│   │   │   │   │   ├── help.vue                 // 帮助与反馈
│   │   │   │   │   ├── login.vue                // 登录
│   │   │   │   │   ├── newmessage.vue           // 新消息提醒
│   │   │   │   │   └── privacy.vue              // 隐私
│   │   │   │   └── settings.vue                 // 设置
│   │   │   └── wallet
│   │   │       └── wallet.vue                   // 我的钱包
│   │   ├── search
│   │       └── search.vue                       // 搜索     
│   ├── images
│   ├── main.js                                  // 程序入口文件，加载各种公共组件
│   ├── router
│   │   └── router.js                           // 所有页面路由控制中心
│   ├── service
│   │   ├── data
│   │   │   ├── album.js                        // 个人相册
│   │   │   ├── burse.js                        // 钱包数据
│   │   │   ├── chatmore.js
│   │   │   ├── collect.js                     // 我的收藏
│   │   │   ├── contacts.js                    // 联系人列表数据
│   │   │   ├── dialoglist.js                  // 对话列表
│   │   │   ├── friendcircle.js                // 朋友圈数据
│   │   │   ├── groupchat.js                   // 群聊数据
│   │   │   ├── login.js                       // 个人用户信息
│   │   │   ├── search.js                      // 搜索的分类
│   │   │   └── userword.js
│   │   └── getData.js                         // 数据交互统一调配
│   ├── style
│   │   ├── public.scss                        // 公共样式
│   │   └── swiper.min.css
│   └── vuex                                   // vuex的状态管理
│       ├── action.js                          // 配置根actions
│       ├── index.js                           // 引用vuex，创建store
│       ├── mutation-types.js                  // 定义常量muations名
│       └── mutation.js                        // 配置根mutations
└── tree.md

36 directories, 133 files

```




