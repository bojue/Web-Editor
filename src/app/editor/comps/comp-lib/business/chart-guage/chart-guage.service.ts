import { Injectable } from '@angular/core';
import { BaseHttpService } from '../../../../../core/provider/baseHttp/base-http.service';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ChartGuageService extends BaseHttpService{

  constructor(
    public http:HttpClient
  ) { 
    super(http, 'chartGuage',)
  }
}
