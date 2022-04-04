import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd, Params, PRIMARY_OUTLET } from "@angular/router";
// import { MenuBreadCrumbService } from 'src/app/providers/menu.breadcrumb.service';

@Component({
  selector: 'app-bread-curmb',
  templateUrl: './bread-curmb.component.html',
  styleUrls: ['./bread-curmb.component.scss']
})
export class BreadCurmbComponent implements OnInit {
  breadcurms:any = []
  designPath:string;

  constructor(
    private activeRoute: ActivatedRoute,
    
    private router: Router ) {
      this.breadcurms = [
        { name: 'TEMPO',path: './home', children:[]}
      ]
  }

  ngOnInit() {
    console.log(this.breadcurms)
  }

 
}
