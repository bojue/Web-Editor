import { Component, OnInit } from '@angular/core';
import { DataBasicComponent } from '../data-basic/data-basic.component';

@Component({
  selector: 'app-input-val',
  templateUrl: './input-val.component.html',
  styleUrls: ['./input-val.component.scss']
})
export class InputValComponent extends DataBasicComponent implements OnInit {
  data_type = 'input_val';

  constructor() { 
    super()
  }

  ngOnInit() {}
}
