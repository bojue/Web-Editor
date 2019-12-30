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
        key_same:"Control + c",
        key_mac:"Control + c",
        key_window:"Control + c"
      },
      {
        name:"删除",
        keySameBool:true,
        key_same:"delete",
        key_mac:"delete",
        key_window:"delete"
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
