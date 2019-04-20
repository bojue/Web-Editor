import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/basic/style-basic/style-basic.component";

@Component({
  selector: 'app-border-component',
  templateUrl: './border.component.html',
  styleUrls: ['./border.component.scss']
})
export class BorderComponent extends StyleBasicComponent implements OnInit {
  borderStyles:any[];
  borderCol:any[];
  constructor() { 
    super()
  }

  ngOnInit() {
    this.borderCol = [
      '#ffffff',
      '#e6e6e6',
      '#cdcdcd',
      '#707070',
      '#2c2c2c',
      '#d81e06',
      '#f4ea2a',
      '#1afa29',
      '#1296db',
      '#13227a',
    ];
    this.borderStyles = [
      {
        name:'无',
        value:''
      },
      {
        name:'直线',
        value:'solid'
      },
      {
        name: '点线',
        value:'dotted',
      },
      {
        name: '虚线',
        value: 'dashed',
      }
    ]
  }

  selBorderCol(col, colIndex) {
    this.style['borderColor'] = col;
    this.style['borderWidth'] = colIndex === 0 ? 0 : 1;
    this.style['borderStyle'] = colIndex === 0 ? null : 'solid';

  }

}
