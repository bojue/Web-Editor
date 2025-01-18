# DataSpace

服务迁移中:在线预览功能暂停

低代码搭建效果演示：[产品MVP DEMO 效果演示](https://www.bilibili.com/video/BV1oW4y1t7px/?vd_source=034415f0468861a710931e3467dc4d15)

## 项目截图

![截屏2024-03-13 17 46 25](https://github.com/bojue/Web-Editor/assets/14350577/5913829b-2ee3-4b5f-bc4f-2e7c50f0d4d2)

## 下载

- 前端

```javascript

git clone https://github.com/bojue/Web-Editor.git
cd Web-Editor
npm install

```

## 运行

1. 默认运行命令，需要服务端支持，也就是所以tag v0.1.0之后的版本，请先下载 [服务端node版本](https://github.com/bojue/Web-editor-server) 并完成服务端启动。

```javascrpt
npm run dev 

//or

npm run start

```


## 使用说明

> 功能列表

* 拖拽创建组件
* 页面管理
* 元素列表
* 样式绑定
* 快捷键
* 预览
* 项目管理
* <del>服务器支持 (仅v0.1.0支持)</del> 服务端支持远程
* IndexDB


> 快捷键

名称|快捷键
----|----
拷贝| `control+ c`
复制| `control+ v`
删除| `delete`
位置|上，下，左，右键

## 开发文档

> 编辑器代码组织

```ASCII
.
+-- editor                      //编辑器模块
|   +-- comps  
|       +-- comp-basic              //组件库基类
|           +-- data-basic             //数据基类组件
|           +-- event-basic            //事件基类组件
|           +-- style-basic            //样式基类组件
|           +-- custom-basic           //自定义基类组件（业务组件）
|       +-- comp-lib                //核心组件库
|           +-- basic                   //基础组件库，不需要绑定数据的组件 
|           +-- business                //业务组件库，可绑定数据等复杂操作
|           +-- tool                    //工具组件库，仅方便编辑组态
|       +-- comp-settings          //设置组件库
|           +-- data                    //数据绑定
|           +-- event                   //事件绑定
|           +-- style                   //样式绑定
|   +-- develop                     //开发编辑模块
|       +-- configuration               //页面配置
|       +-- help                        //帮助
|       +-- pre-view                    //预览
|       +-- setting                     //组件设置
|       +-- develop.component           //编辑器核心容器组态
|   +-- directive                   //编辑器指令
|   +-- model  
|   +-- provider                    //编辑器核心服务
|       +-- comp-list.service           //组态列表
|       +-- comp-config.service         //组态配置信息
|       +-- comp-dynamic-create.service //组态type和组态映射
```

## v0.1.1
- 服务端(仅v0.1.1支持服务端)

```javascript
npm run proxy 
```


下载编辑器对应的[Node服务端](https://github.com/bojue/Web-editor-server)，` v0.1.0 `以后版本都需要服务器支持，请按照 [文档](https://github.com/bojue/Web-editor-server/blob/master/README.md) 配置依次服务器


## 其他


> History List

- UI和交互优化
- 项目基于angular2 (版本号 13)开发
- 已经升级到V13
- 服务端支持
- 本地部署


> TODO List

- IDC行业组态扩展示例内容
- 在线试用



## History

- 20220405 
    - angular版本更新Version8 => Version13
    - 优化拖拽创建组件卡顿问题
