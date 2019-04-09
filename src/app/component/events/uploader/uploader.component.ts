import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.scss']
})
export class UploaderComponent implements OnInit {
  @Input() data:any;
  imgs = [];

  constructor() { }

  ngOnInit() {
    this.imgs = [{
      name:"you",
      url: './../assets/imgs/you.jpg',
    },{
      name:"es6",
      url: './../assets/imgs/es.jpeg',
    }]
  }

  selectImg(img) {
    if(img && img['url']) {
      this.data['img_url'] = img['url'];
    }
  }

}
