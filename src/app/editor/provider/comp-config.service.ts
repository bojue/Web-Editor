import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompConfigService {
      
    constructor() {}

    //根据组件类型，获取视图组件初始化配置
    getCompDefaultConfig(style = 'text') {

        // TODO:获取接口写在后端,前端增加视图组件配置页面
        let data = {
            "line": {
                compIndex: 2,
                name:'横线',
                type:'line',
                data: {
                },
                style: this._defCompStyle({
                    left:100,
                    top:100
                },{
                    x1:100,
                    y1:100,
                    x2:300,
                    y2:300
                }),
            },
            "text": {
                compIndex: 2,
                name:'文本',
                type:'text',
                data: {
                    text_val:'左侧绑定文本',
                },
                style: this._defCompStyle({
                    width:120,
                    height:30
                }),
            },
            "input": {
                compIndex: 2,
                name:'输入框',
                type:'input',
                data: {
                    input_val:'',
                    placeholder:"输入"
                },
                style: this._defCompStyle({
                    width:220,
                    height:30
                }),
            },
            "textarea": {
                compIndex: 2,
                name:'多行输入',
                type:'textarea',
                data: {
                    textarea_val:'',
                    placeholder:"文本输入"
                },
                style: this._defCompStyle({
                    width:220,
                    height:60
                }),
            },
            "img":  {
                compIndex: 2,
                name:'图片',
                type:'img',
                data: {
                    img_url:'assets/imgs/es.jpeg',
                },
                style: this._defCompStyle({
                    width:120,
                    height:80
                }),
            } ,    
            "button":{
                compIndex: 3,
                name:'按钮',
                type:'button',
                data: {
                    button_val:'确认'
                },
                style: this._defCompStyle({
                    width:80,
                    height:30
                }),
                event:{
                    clickBool: false,
                    click: {
                        data: null
                    },
                    routeBool: true,
                    route:{
                        route_link: 'home',
                        data: null,
                    }
                }
            },  
            "video":{
                compIndex: 3,
                name:'视频',
                type:'video',
                data: {
                    video_val:'http://www.w3school.com.cn/i/horse.mp3'
                },
                style: this._defCompStyle({
                    width:300,
                    height:180
                }),
                event:{
            
                }
            },
            "chart_polyline":{
                compIndex: 3,
                name:'折线',
                type:'chart_polyline',
                data: {
            
                },
                style: this._defCompStyle({
                    width:300,
                    height:300
                }),
                event: {

                }
            },
            "chart_gauge":{
                compIndex: 3,
                name:'仪表盘',
                type:'chart_gauge',
                data: {
            
                },
                style: this._defCompStyle({
                    width:300,
                    height:300
                }),
                event: {
    
                }
            },     
            "chart_pie": {
                compIndex: 3,
                name:'饼图',
                type:'chart_pie',
                data: {
            
                },
                style: this._defCompStyle({
                    width:300,
                    height:300
                }),
                event: {
    
                }
            },
            "chart_radar":{
                compIndex: 3,
                name:'雷达图',
                type:'chart_radar',
                data: {
            
                },
                style: this._defCompStyle({
                    width:300,
                    height:300
                }),
                event: {
    
                }
            },     
        }
        return data[style]  ? data[style] : {} 
    }

    auxiComp = {
        compIndex: 999,
        name:'辅助线',
        type:'auxi',
        data: {
            title: '辅助线'
        },
        style: this._defCompStyle()
    }

    areaComp = {
        compIndex: 999,
        name:'区域选中',
        type:'area',
        data: {
            title: '区域选中'
        },
        style: this._defCompStyle()
    }

    _defCompStyle(customStyle ?:any,appendStyle?:any) {
        let styleJson = {
            position: 'absolute', //定位类型|position
            top:400, //位置|postion
            left:200,
            height:100, //尺寸|size
            width: 100,
            borderColor: "#FF0000", //边框|border
            borderWidth: 1,
            borderStyle: 'solid',
            paddingTopBottom:0, //内边距|padding
            paddingLeftRight:0,
            fontSize:14,
            textAlign:'center', //文字水平位置|textAlign
   
        }
        for(let key in customStyle) {
            styleJson[key] = customStyle[key];
        }
        for(let key in appendStyle) {
            styleJson[key] = appendStyle[key];
        }
        return styleJson;
    }

    getAuxiComp() {
        return this.auxiComp;
    }

    getAreaComp() {
        return this.areaComp;
    }

}