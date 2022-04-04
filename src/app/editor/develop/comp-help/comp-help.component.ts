import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-comp-help',
  templateUrl: './comp-help.component.html',
  styleUrls: ['./comp-help.component.scss']
})
export class CompHelpComponent implements OnInit {
  data:any[];
  showHelp:boolean = false;
  constructor() { }

  ngOnInit() {
    this.data = [
      {
        name:"拷贝",
        keySameBool:true,
        key_same:"Control + C",
        key_mac:"Control + C",
        key_window:"Control + C"
      },
      {
        name:"粘贴",
        keySameBool:true,
        key_same:"Control + V",
        key_mac:"Control + V",
        key_window:"Control + V"
      },
      {
        name:"删除",
        keySameBool:true,
        key_same:"Delete",
        key_mac:"Delete",
        key_window:"Delete"
      },
      {
        name:"位置",
        keySameBool:true,
        key_same:"上,下,左,右",
        key_mac:"上下左右键",
        key_window:"上下左右键"
      }
    ]
  }

}
