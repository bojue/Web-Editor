import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.scss']
})
export class WorkspaceComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projectArr = [{
    name:'报表系统',
    desciption:"",
    state:'official'
  }, {
    name:'销售Dashboard',
    desciption:"",
    state:'pre'
  },{
    name:"双十一销售监控系统",
    desciption:"监控软件测试Demo,主要展示数据统计报表",
    state:''
  }]

  stateArr = [
    {
      src:'./../../../assets/icons/state_official.svg',
      val:"已发布"
    },
    {
      src:'./../../../assets/icons/state_pre.svg',
      val:"待发布"
    }
  ]

}
