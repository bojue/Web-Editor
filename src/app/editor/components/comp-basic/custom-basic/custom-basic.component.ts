
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BasicComponent } from '../basic/basic.component';
import { EmitSubService } from 'src/app/providers/emit-sub.service';

@Component({
  selector: 'app-custom-basic',
  templateUrl: './custom-basic.component.html',
  styleUrls: ['./custom-basic.component.scss']
})
export class CustomBasicComponent extends BasicComponent implements OnInit {

  constructor(
    private compEmitService: EmitSubService
  ) { 
    super()
  }
  
  initBasicData() {
    this.style = this.settingObj['style']
    this.data =  this.settingObj['data']
  }

}
