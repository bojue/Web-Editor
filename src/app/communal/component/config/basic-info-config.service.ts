import { Injectable, OnInit } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BasicInfoConfigService {
      
    constructor() {}

    getTextInfoConfig() {
        let data = {
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
            }
          }
        return data;
    }

    getImgInfoConfig() {
        let data = {
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
            }
          }
        return data;
    }

}