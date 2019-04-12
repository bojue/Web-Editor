import { ActivatedRoute } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss']
})
export class DetailComponent implements OnInit {
  info:any;

  constructor(
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    let queryParam = this.activatedRoute.snapshot.paramMap.get('queryParams')
    let params = JSON.parse(queryParam);
    this.info = params && params['param'];
  }

}
