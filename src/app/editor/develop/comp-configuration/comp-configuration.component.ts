import { Component, OnInit, Input, Output ,EventEmitter} from "@angular/core";
import { AppService } from "src/app/providers/app.service";
import { CompListService } from "../../provider/comp-list.service";
import { Observable } from 'rxjs';
import { BaseHttpService } from '../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-comp-configuration',
  templateUrl: './comp-configuration.component.html',
  styleUrls: ['./comp-configuration.component.scss']
})
export class CompConfigurationComponent extends BaseHttpService implements OnInit {
  url: 'page';
  projectId:number;
  @Input() pageGridSetting;
  @Input() currnetPageComps;
  @Output() compDragEvent = new EventEmitter<any>();
  @Output() selCurrentPage = new EventEmitter<any>();
  @Output() activeCompFun = new EventEmitter<any>();
  @Output() addPage = new EventEmitter<any>();
  pages: any;
  compList:any[];
  showBool:boolean;
  currentTab:string;

  constructor(
    private http:HttpClient,
    private service: AppService,
    private activatedRoute: ActivatedRoute,
    private compListService: CompListService,
  ) { 
    super(http, 'page');
  }

  ngOnInit() {
    this.getParams();
    this.initData();
  }

  getParams() {
    this.activatedRoute.queryParams.subscribe(res => {
      this.projectId = res['project'];
    })
  }
  
  initData() {
    let _url = `pages/${this.projectId}`;
    Observable.forkJoin([this.getAll(_url)]).subscribe(res =>{
      let data = res && res[0] && res[0]['data'];
      this.pages = data;
    })
    this.showBool = true;
    this.compList = this.compListService.getCompList();
    this.selectTabs();
  }

  dragCompEnd(event){
    this.compDragEvent.emit(event);
  }

  showGrigFun() {
    this.pageGridSetting['showLeft'] = !this.pageGridSetting['showLeft'];
  }

  selectTabs(tab:string = 'tabList') {
    this.currentTab = tab;
  }

  //选择当前页面的组件列表
  seledCurrentPage(page) {
    this.selCurrentPage.emit(page);
  }

  activeComp(comp) {
    this.activeCompFun.emit(comp);
  }

  createPage() {
    this.addPage.emit()
  }
}
