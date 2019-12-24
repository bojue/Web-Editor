import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-project-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  projectArr = [{
    id:1,
    name:'报表系统',
    desciption:"",
    state:'official'
  }, {
    id:2,
    name:'销售Dashboard',
    desciption:"",
    state:'pre'
  },{
    id:3,
    name:"双十一销售监控系统",
    desciption:"监控软件测试Demo,主要展示数据统计报表",
    state:''
  }]

  stateArr = [
    {
      src:'assets/icons/state_official.svg',
      val:"已发布"
    },
    {
      src:'assets/icons/state_pre.svg',
      val:"待发布"
    }
  ]

}
