import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoConfigService {
      
    constructor() {}

    getTextInfoConfig() {
        let data = {
            name:'文字组件',
            type:'text',
            data: {
              compIndex: 4,
              name:'图片',
              value:''
            }
        }
        return data;
    }

    getImgInfoConfig() {
        let data =  {
            name:'图片组件',
            type:'img',
            data: {
              compIndex: 3,
              name:'图片',
              height:200,
              width: 400,
              url:'./../assets/imgs/es.jpeg'
            }
        }
        return data;
    }

}