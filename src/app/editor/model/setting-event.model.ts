export class SettingEvent {
    event_mothod: string; //触发事件
    event_route_val:any; //路由
    event_route_params?:any; //路由参数
    event_route_extends?:any; //路由扩展
    event_stoppropagation_bool?: any; //阻止事件冒泡
}