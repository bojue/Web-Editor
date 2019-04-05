import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  pageList: any[];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
    this.pageList = [{
      name:"首页",
      route:"home"
    }, {
      name: "开发页面",
      route:"develope"
    },{
      name: "详情",
      route:"detail"
    }]
  }

  route(route = 'home') {
    this.router.navigate([route])
  }

}
