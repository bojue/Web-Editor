import { Injectable, Inject } from '@angular/core';
import { HttpClient } from 'selenium-webdriver/http';
import * as _ from 'lodash'; 
import { URL_STRING } from './InjectUrlString';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(
    public httpClient: HttpClient,
    @Inject(URL_STRING) public baseURL:string
  ) { }

  get(params:any, url?:string) {
    let _paramsIsObjectBool = _.isObject(params);
    let _url = url || this.baseURL;
  }
}
