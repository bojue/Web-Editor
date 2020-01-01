import { Component, OnInit } from '@angular/core';
import { StyleBasicComponent } from '../../../comp-basic/style-basic/style-basic.component';

@Component({
  selector: 'app-page-size',
  templateUrl: './page-size.component.html',
  styleUrls: ['./page-size.component.scss']
})
export class PageSizeComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    
  }

}

