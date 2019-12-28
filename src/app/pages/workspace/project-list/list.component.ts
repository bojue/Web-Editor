import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor(
      private router:Router,
      private route: ActivatedRoute,
  ) { }

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

  toDetail(id, path) {
      this.router.navigate([`${path}/` ], {queryParams: {pageId:id}})
  }

}
