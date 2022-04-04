import { Component, OnInit } from '@angular/core';
import { StyleBasicComponent } from '../../../comp-basic/style-basic/style-basic.component';

@Component({
  selector: 'app-user-drag',
  templateUrl: './user-drag.component.html',
  styleUrls: ['./user-drag.component.scss']
})
export class UserDragComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  override ngOnInit() {
    
  }

  changeVal(val: any) {
    this.style['userDrag'] = val || 'element'
  }

}
