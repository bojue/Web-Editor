import { Component, OnInit, Input, Output ,EventEmitter} from "@angular/core";
import { AppService } from "src/app/providers/app.service";

@Component({
  selector: 'app-comp-configuration',
  templateUrl: './comp-configuration.component.html',
  styleUrls: ['./comp-configuration.component.scss']
})
export class CompConfigurationComponent implements OnInit {
  @Input() pageGridSetting;
  @Output() compDragEvent = new EventEmitter<any>();
  treeNodes: any[];
  compList:any[];
  showBool:boolean;

  constructor(
    private service: AppService,
  ) { }

  ngOnInit() {
    this.initData();
  }

  initData() {
    this.treeNodes = this.service.getPages();

    this.showBool = true;
    this.compList = this.service.getComponentModeules();
    
  }

  dragCompEnd(event){
    this.compDragEvent.emit(event);
  }

  showGrigFun() {
    this.pageGridSetting['showLeft'] = !this.pageGridSetting['showLeft'];
  }

}
