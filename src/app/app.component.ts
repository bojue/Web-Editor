import { Component, OnInit } from '@angular/core';
import { IndexDBService } from './core/provider/indexDB/indexDB.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})

export class AppComponent implements OnInit{
  DB_NAME = 'tempoEditor';
  DB:any;
  tempoIndexDBTab:IndexDBService;
  constructor(
    public indexDBService: IndexDBService
  ) {
    this.indexDBService.initIndexDB();
  }

  ngOnInit() {

  }
};