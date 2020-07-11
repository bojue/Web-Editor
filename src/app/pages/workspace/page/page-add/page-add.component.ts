import { Component, OnInit } from '@angular/core';
import { PageObject } from '../../model/page.model';
import { ActivatedRoute } from '@angular/router';

import { Observable } from 'rxjs';
import { BaseHttpService } from '../../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { IndexDBService } from '../../../../core/provider/indexDB/indexDB.service';
import { TempoToastrService } from 'src/app/core/provider/toaster/toastr.service';

@Component({
  selector: 'app-page-add',
  templateUrl: './page-add.component.html',
  styleUrls: ['./page-add.component.scss']
})
export class PageAddComponent extends BaseHttpService implements OnInit {
  page:PageObject;
  projectId:number;
  datas:any;
  pagesUrl:string = 'pages';

  constructor(
    public http: HttpClient,
    public activeRoute:ActivatedRoute,
    public modal:NgbActiveModal,
    public indexDBService:IndexDBService,
    private toaster: TempoToastrService,
  ) { 
    super(http, 'page')
  }

  ngOnInit() {
    this.getRouteParams();
    this.page = new PageObject();
  }

  getRouteParams() {
    this.activeRoute.queryParams.subscribe(res => {
      this.projectId = parseInt(res['project']);
    })
  }

  getPageParams() {
    this.page['projectId'] = this.projectId;
    this.page['width'] = 1200;
    this.page['height'] = 700;
    this.page['componentList'] = "[]";
    return this.page;
  }

  save() {
    let params = this.getPageParams();
    Observable.forkJoin([this.indexDBService.createData(this.pagesUrl, params)]).subscribe(res => {
      this.toaster.showToaster({
        state: this.toaster.STATE.SUCCESS,
        info:'页面创建成功'
      })
      this.modal.close('success');
    },error => {
      this.toaster.showToaster({
        state: this.toaster.STATE.ERROR,
        info:'页面创建失败'
      })
      this.modal.close("error");
    })
  }

  cancel() {
    this.modal.close("close");
  }
}
