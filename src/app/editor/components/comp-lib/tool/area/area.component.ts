import { Component, OnInit } from '@angular/core';
import { BasicComponent } from '../../../comp-basic/basic/basic.component';

@Component({
  selector: 'app-area',
  templateUrl: './area.component.html',
  styleUrls: ['./area.component.scss']
})
export class AreaComponent  extends BasicComponent  implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
    this.initData();
  }

}
