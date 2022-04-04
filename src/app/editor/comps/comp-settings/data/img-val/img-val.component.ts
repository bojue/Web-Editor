import { Component, OnInit } from "@angular/core";
import { forkJoin } from 'rxjs';
import { DataBasicComponent } from '../../../comp-basic/data-basic/data-basic.component';
import { IndexDBService } from 'src/app/core/provider/indexDB/indexDB.service';

@Component({
  selector: 'app-img-val',
  templateUrl: './img-val.component.html',
  styleUrls: ['./img-val.component.scss']
})
export class ImgValComponent extends DataBasicComponent implements OnInit {
    imgs:any[];
    override data_type = 'img_url';
    imgsUrl = 'imgs';
    constructor(
      private  indexDBService:IndexDBService
    ) {
      super()
    }
  
    override ngOnInit() {
      this.initParentData();
      this.getData();
    }

    getData() {
      forkJoin([this.indexDBService.getDataAll(this.imgsUrl)]).subscribe(res => {
        this.imgs = res && res[0];
      })
    }
  
    selectImg(img: any) {
      if(img && img['url']) {
        this.data['img_url'] = img['url'];
      }
    }
  
  }
  