import { Component, OnInit } from '@angular/core';
import { CustomBasicComponent } from 'src/app/component/basic/custom-basic/custom-basic.component';
import { CompEmitService } from 'src/app/providers/comp-emit.service';

@Component({
  selector: 'app-thermometer',
  templateUrl: './thermometer.component.html',
  styleUrls: ['./thermometer.component.scss']
})
export class ThermometerComponent  extends CustomBasicComponent implements OnInit {
  constructor(private emitService: CompEmitService) {
    super(emitService)
   }

  ngOnInit(): void {
    this.initBasicData();
    this.initData();
  }

  initData(): void {
  
  }

}
