import { Component, OnInit } from '@angular/core';
import { ProjectObject } from '../../model/project.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';
import { NgbActiveModal } from '@ng-bootstrap/ng-bootstrap';
import { BaseHttpService } from 'src/app/core/provider/baseHttp/base-http.service';

@Component({
  selector: 'app-project-add',
  templateUrl: './project-add.component.html',
  styleUrls: ['./project-add.component.scss']
})
export class ProjectAddComponent extends BaseHttpService implements OnInit {
  projectObj: ProjectObject;

  constructor(
    public http: HttpClient,
    public activeRoute:ActivatedRoute,
    public modal:NgbActiveModal
  ) { 
    super(http, 'project');
  }

  ngOnInit() {
    this.projectObj = new ProjectObject();
  }

  getPageParams() {
    this.projectObj['creator'] = "1";
    this.projectObj['description'] =  this.projectObj['description'] || '无';
    this.projectObj['create_time'] = new Date().toString();
    this.projectObj['update_time'] = new Date().toString();
    return this.projectObj;
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
