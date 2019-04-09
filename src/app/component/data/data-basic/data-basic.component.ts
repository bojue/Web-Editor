import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-data-basic',
  templateUrl: './data-basic.component.html',
  styleUrls: ['./data-basic.component.scss']
})
export class DataBasicComponent implements OnInit {
  @Input() data:any;

  data_type: string;
  createObj = {

  }
  constructor() { }

  ngOnInit() {
    
  }

  showBoolHeader() {
   return this.data.hasOwnProperty(this.data_type);
  
  }

}
