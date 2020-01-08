import { Component, OnInit } from '@angular/core';
import { BaseHttpService } from '../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-project-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent extends BaseHttpService implements OnInit {
  baseUrl = 'project';
  project: any; //项目
  constructor(
    private http: HttpClient
  ) {
    super(http, 'project')
   }

  ngOnInit() {
    this.getData();
  }

  getData() {
    Observable.forkJoin([this.get(1, this.baseURL)]).subscribe(res => {
      let data = res && res[0] && res[0]['data'];
      this.project = data;
    })
  }

}
