
### 利用vue2+vuex写一个模仿微信app的单页面应用
使用SVG格式构建页面icon图

# 页面部分截图

###底部导航

<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/nav.gif" width="300" height="530"/>

###通讯录

<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/addressbook.gif" width="300" height="530"/>

###发现

<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/find.png" width="300" height="530"/>

###朋友圈
######上传图片
<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/shangchuan.gif" width="300" height="530"/>
######点赞
<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/like.gif" width="300" height="530"/>
######评论
<img src="https://github.com/bailichen/vue-weixin/raw/master/printscreen/commont.gif" width="300" height="530"/>



# 目标功能
- [x] 微信 
- [x] 通讯录 
- [x] 发现 
- [x] 我
- [x] 设置
- [x] 新消息提醒
- [x] 勿扰模式
- [x] 聊天
- [x] widows 微信已登录
- [x] 搜索页
- [ ] 对话页、对话功能
- [ ] 对话功能
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


# 项目布局
```
|-- build                            // webpack配置文件
|-- config                           // 项目打包路径
|-- weixin                           // 上线项目文件，放在服务器即可正常访问
|
|-- src                              // 源码目录
|   |-- components                   // 组件
|       |-- footer                   // 底部微信导航
|       |-- header                 	 // 头部公共组件
|       |-- findandMe                // 发现和我 共同的模块的列表
|       |-- enlarge                  //放大头像图片
|
|   |-- config                       // 基本配置
|       |-- env.js                   // 环境切换配置
|       |-- fetch.js                 // 获取数据
|       |-- mUtils.js                 // 工具
|       |-- rem.js                   // px转换rem
|       |-- uploadPreview.js         // 上传图片控件
|
|   |-- images                       // 公共图片
|
|   |-- frames                       // 页面组件
|       |-- search                 	 // 搜索页面
|       |-- dialogue                 // 微信首页(对话列表页)
|			  |--conversation			           //	对话详情页
|			      |--singlechat			          //单人对话
|       |-- addressbook              // 通讯录
|         |-- details                // 详细资料
|           |-- more                 // 更多
|       |-- find                     // 发现
|         |-- firendcircle            // 朋友圈
|       |-- me                     	 // 我
|       	|-- settings               // 设置
|       		|-- detailset             
|       			|-- newmessage        // 新消息提醒
|       			|-- disturbance       // 勿扰模式
|       			|-- chat       		  	// 聊天
|       			|-- privacy       		// 隐私
|       			|-- currency      		// 通用
|       			|-- aboutwc       		// 关于微信
|       			|-- help       		  	// 帮助与反馈
|       			|-- login       			// 登录
|       |-- computer                 // pc端登录
|       |-- transfer                 // 向pc端传递文件
|
|   |-- plugins                      // 引用的插件
|
|   |-- router                       // 路由配置
|
|   |-- service                      // 数据交互统一调配
|       |-- search.js                 // 搜索的分类
|       |-- contacts.js                 // 联系人列表数据
|       |-- dialogist.js             // 对话列表
|       |-- login.js                  // 个人用户信息
|       |-- friendcircle.js          // 朋友圈数据
|       |-- album.js                // 个人相册
|       |-- burse.js                // 钱包数据
|       |-- collect.js              // 我的收藏
|       |-- groupchat.js              // 群聊数据
|
|   |-- vuex                         // vuex的状态管理
|       |-- modules                  // 加载各种store模块
|       |-- action.js                // 配置根actions
|       |-- getters.js               // 配置根getters
|       |-- index.js                 // 引用vuex，创建store
|       |-- mutation-types.js        // 定义常量muations名
|       |-- mutations.js             // 配置根mutations
|
|   |-- style                        // 各种样式文件
|       |-- public.scss              // 公共样式文件、样式配置文件
|
|   |-- App.vue                      // 页面入口文件
|
|   |-- main.js                      // 程序入口文件，加载各种公共组件
|
|-- .babelrc                         // ES6语法编译配置
|-- .editorconfig                    // 代码编写规格
|-- .gitignore                       // 忽略的文件
|-- favicon.ico                      // 页面左上角小图标
|-- index.html                       // 入口html文件
|-- package.json                     // 项目及工具的依赖配置文件
|-- README.md                        // 说明
```

