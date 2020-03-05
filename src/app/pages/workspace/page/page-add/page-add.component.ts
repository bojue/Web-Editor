import { Component, OnInit } from '@angular/core';
import { PageObject } from '../../model/page.model';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { BaseHttpService } from '../../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.scss']
})
export class PageAddComponent extends BaseHttpService implements OnInit {
  page:PageObject;
  projectId:number;
  datas:any;

  constructor(
    public http: HttpClient,
    public activeRoute:ActivatedRoute,
    public modal:NgbActiveModal
  ) { 
    super(http, 'page')
  }

  ngOnInit() {
    this.getRouteParams();
    this.page = new PageObject();
  }

  getRouteParams() {
    this.activeRoute.queryParams.subscribe(res => {
      this.projectId = res['project'];
    })
  }

  getPageParams() {
    this.page['appendName'] != this.page['name'];
    this.page['projectId'] = this.projectId;
    this.page['create_time'] = new Date().toString();
    this.page['update_time'] = new Date().toString();
    return this.page;
  }

  save() {
    let params = this.getPageParams();
    Observable.forkJoin([this.create(params)]).subscribe(res => {
      this.modal.close('success');
    },error => {
      this.modal.close('error');
    })
  }

  cancel() {
    this.modal.close("close");
  }
}
