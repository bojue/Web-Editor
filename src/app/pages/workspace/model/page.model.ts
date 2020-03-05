export class PageObject {
    id:number;
    projectId:number;
    name:string;
    appendName:string;
    description:string;
    creator:any = 1; //创建人
    style:{
        width:1200,
        height:1000,
        background:'#ffffff'
    };
    vip_status:number = 1;  //vip标示
    componentList:string;
    create_time:string; //创建时间
    update_time:string; //更新时间
    type:string = 'default' //类型：default:默认|template:模板
}