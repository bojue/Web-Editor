
import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { BasicComponent } from '../basic/basic.component';
import { CompEmitService } from 'src/app/providers/comp-emit.service';

@Component({
  selector: 'app-custom-basic',
  templateUrl: './custom-basic.component.html',
  styleUrls: ['./custom-basic.component.scss']
})
export class CustomBasicComponent extends BasicComponent implements OnInit {

  constructor(
    private compEmitService: CompEmitService
  ) { 
    super()
  }
  
  initBasicData() {
    this.style = this.settingObj['style']
    this.data =  this.settingObj['data']
  }

}
