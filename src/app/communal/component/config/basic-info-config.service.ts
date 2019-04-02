import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoConfigService {
      
    constructor() {}

    //根据组件类型，获取视图组件初始化配置
    getCompDefaultConfig(style = 'text') {

        // TODO:获取接口写在后端,前端增加视图组件配置页面
        let data = {
           text: {
                compIndex: 2,
                name:'文本',
                type:'text',
                data: {
                    value:'./../assets/imgs/text.jpeg',
                },
                style: {
                    height:100,
                    width: 100,
                    border: '',
                    borderColor: '',
                    borderWidth: 0,
                    borderStyle: ''
                }
                },
            img:  {
                compIndex: 2,
                name:'图片',
                type:'img',
                data: {
                    value:'./../assets/imgs/es.jpeg',
                },
                style: {
                    height:100,
                    width: 100,
                    border: '',
                    borderColor: '',
                    borderWidth: 0,
                    borderStyle: ''
                }
                }                 
            }
        return data[style]  ? data[style] : {} 
    }

}