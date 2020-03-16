# Tempo

基于angular版本开发，[在线预览](https://bojue.github.io/Web-Editor/)

#### 项目截图：

![截图](http://10.163.100.175:8090/phoenix/phoenix-web/uploads/2f97024dca38aebc8348b8703b2408da/%E5%B1%8F%E5%B9%95%E5%BF%AB%E7%85%A7_2020-03-16_14.07.49.png)

## 下载

```javascript
git clone https://github.com/bojue/Web-Editor.git
cd Web-Editor
npm install

```

## 运行

1. 默认运行命令，需要服务端支持，也就是所以tag v0.1.0之后的版本，请先下载 [服务端node版本](https://github.com/bojue/Web-editor-server-node) 并完成服务端启动。

```javascrpt
npm run proxy 

```
2. 如果仅需要运行前端静态版本，需要切换到:tag  v0.1.0版本,数据结构被重构，可以参考使用

```javascript
npm run start 
```

### 文档

> 功能列表

* 拖拽创建组件
* 页面管理
* 元素列表
* 样式绑定
* 快捷键
* 预览


> 编辑器代码组织

```ASCII
.
+-- editor  //编辑器模块
|   +-- comps  //模块
|       +-- comp-basic //组件库依赖的基础模块
|           +-- data-basic 
|           +-- event-basic
|           +-- style-basic
|           +-- custom-basic
|       +-- comp-lib // 组件库
|           +-- basic    //基础组件库，不需要绑定数据的组件 
|           +-- business //业务组件库，可绑定数据等复杂操作
|           +-- tool     //工具组件库，仅方便编辑组态，不参与业务
|       +-- comp-settings
|           +-- data
|           +-- event
|           +-- style
|   +-- develop  //开发编辑模块
|       +-- configuration  
|       +-- help 
|       +-- pre-view
|       +-- setting //设置
|       +-- develop.component //编辑器核心容器组态
|   +-- directive 
|   +-- model 
|   +-- provider
|       +-- comp-list.service //组态列表
|       +-- comp-config.service //组态配置信息
|       +-- comp-dynamic-create.service //组态type和组态映射服务
```

> 快捷键

名称|快捷键
----|----
拷贝| `control+ c`
复制| `control+ v`
删除| `delete`
位置|上，下，左，右键

> History List

- 项目基于angular2 (版本号 7.0.2)开发
- 已经升级到V8.0
- 目前正在支持服务端业务，[node服务端](https://github.com/bojue/Web-editor-server-node)


> TODO List

- 完整的服务端支持
- IDC行业组态扩展示例内容
- 在线试用
- 本地部署





