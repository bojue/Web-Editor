import { Component, OnInit } from "@angular/core";
import { DataBasicComponent } from "../../../comp-basic/data-basic/data-basic.component";

@Component({
  selector: 'app-img-val',
  templateUrl: './img-val.component.html',
  styleUrls: ['./img-val.component.scss']
})
export class ImgValComponent extends DataBasicComponent implements OnInit {
    imgs = [];
    data_type = 'img_url';
    constructor() {
      super()
    }
  
    ngOnInit() {
      this.initParentData();
      this.imgs = [{
        name:"you",
        url: './../assets/imgs/you.jpg',
      },{
        name:"es6",
        url: './../assets/imgs/es.jpeg',
      },
      {
        name:"es6",
        url: './../assets/imgs/test1.jpg',
      },{
        name:"es6",
        url: './../assets/imgs/test2.jpg',
      }]
    }
  
    selectImg(img) {
      if(img && img['url']) {
        this.data['img_url'] = img['url'];
      }
    }
  
  }
  