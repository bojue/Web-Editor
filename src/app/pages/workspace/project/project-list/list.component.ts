import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { BaseHttpService } from '../../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/observable';
import 'rxjs/add/observable/forkJoin'
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { TempoToastrService } from 'src/app/core/provider/toaster/toastr.service';
import { SweetalertService } from 'src/app/core/provider/toaster/sweetalert.service';
import { PageAddComponent } from '../../page/page-add/page-add.component';
import { ProjectAddComponent } from '../project-add/project-add.component';

@Component({
  selector: 'app-project-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent extends BaseHttpService implements OnInit {
  projects:any[];
  states:any[];
  constructor(
      private http: HttpClient,
      private router:Router,
      private route: ActivatedRoute,
      private modalService: NgbModal,
      private toaster: TempoToastrService,
      private sweet:SweetalertService
  ) { 
    super(http, "projects")
  }

  ngOnInit() {
    this.getData();
  }

  getData() {
    Observable.forkJoin([this.getAll(), this.getAll("states")]).subscribe(res=> {
      this.projects = res && res[0] && res[0]['data'];
      this.states = res && res[1] && res[1]['data']
    })
  }

  toDetail(projectId, path) {
      this.router.navigate([`${path}/` ], {queryParams: {project: projectId}})
  }

  toAddProject() {
    let addProject = this.modalService.open(ProjectAddComponent);
    addProject.componentInstance.datas = {
      state:'addProject'
    };
    addProject.result.then((result) => {
      if(result === 'success') {
        this.toaster.showToaster({
          state: this.toaster.STATE.SUCCESS,
          info:'项目创建成功'
        })
        this.getData();
      }else {
        
      }
  
    }, (reason) => {
      this.toaster.showToaster({
        state: this.toaster.STATE.ERROR,
        info:'项目创建失败'
      })
    });
  }

  delProject(id) {
    console.log(id)
    if(id !== null) {
      this.sweet.deleteAlert().then(res => {
        if(res['value']) {
          let url = 'project/' + id;
          this.delete(null, url).subscribe(res => {
            this.getData();
            this.toaster.showToaster({
              state: this.toaster.STATE.SUCCESS,
              info:'项目删除成功'
            })
          },error => {
            this.toaster.showToaster({
              state: this.toaster.STATE.ERROR,
              info:'项目删除失败'
            })
          })
        }
      })
    }
  }

}
