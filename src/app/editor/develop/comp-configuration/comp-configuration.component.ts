import { Component, OnInit, Input, Output ,EventEmitter} from "@angular/core";
import { AppService } from "src/app/providers/app.service";
import { CompListService } from "../../provider/comp-list.service";

@Component({
  selector: 'app-comp-configuration',
  templateUrl: './comp-configuration.component.html',
  styleUrls: ['./comp-configuration.component.scss']
})
export class CompConfigurationComponent implements OnInit {
  @Input() pageGridSetting;
  @Output() compDragEvent = new EventEmitter<any>();
  @Output() selCurrentPage = new EventEmitter<any>();
  @Output() currentPageEvents = new EventEmitter<any>();

  pages: any;
  compList:any[];
  showBool:boolean;
  currentTab:string;

  constructor(
    private service: AppService,
    private compListService: CompListService,
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.pages = this.service.getPages();
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

  currentPageEvent(state) {
    this.currentPageEvents.emit(event);
  }
}
