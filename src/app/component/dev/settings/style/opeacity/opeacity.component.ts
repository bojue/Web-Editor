import { Component, OnInit } from "@angular/core";
import { StyleBasicComponent } from "src/app/component/basic/style-basic/style-basic.component";

@Component({
  selector: 'app-opeacity',
  templateUrl: './opeacity.component.html',
  styleUrls: ['./opeacity.component.scss']
})
export class OpeacityComponent extends StyleBasicComponent implements OnInit {

  constructor() { 
    super()
  }

  ngOnInit() {
    this.style['opeacity'] = this.style['opeacity'] || 1;
  }

}
