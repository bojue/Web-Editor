import { Component, OnInit, OnDestroy } from '@angular/core';
import { CustomBasicComponent } from 'src/app/component/basic/custom-basic/custom-basic.component';
import { SettingObjComponent } from 'src/app/module/setting-object.component';
import { CompEmitService } from 'src/app/providers/comp-emit.service';

@Component({
  selector: 'app-equipment-data-info',
  templateUrl: './equipment-data-info.component.html',
  styleUrls: ['./equipment-data-info.component.scss']
})
export class EquipmentDataInfoComponent extends CustomBasicComponent  implements OnInit, OnDestroy, SettingObjComponent{
  eventEmitter:any;
  equipmentList :any[];
  data: any;
  constructor(
    private emitService: CompEmitService,
  ) {
    super(emitService)
  }

  ngOnInit() {
    this.initBasicData();
    this.initData()
  }

  initData() {
    this.equipmentList = [
      {
        name: '电压1',
        val: 12,
        unit: 'V',
      },
      {
        name: '电压2',
        val: 22,
        unit: 'V',
      },
      {
        name: '电压3',
        val: 11,
        unit: 'V',
      }
  
    ]
  }

  ngOnDestroy() {

  }

}
