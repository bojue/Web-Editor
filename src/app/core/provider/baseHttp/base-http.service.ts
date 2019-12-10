import { Injectable, Inject } from '@angular/core';
import * as _ from 'lodash'; 
import { URL_STRING } from './InjectUrlString';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class BaseHttpService {

  constructor(
    public https: HttpClient,
    @Inject(URL_STRING) public baseURL:string
  ) { }

  header(params?:any, url?:string) {
    return this.https.head(url);
  }

  get(params:any, url?:string) {
    let _paramsIsObjectBool = _.isObject(params);
    let _url = url || this.baseURL;
    console.log(_url)
    return this.https.get(_url);
  }

  getAll(url?:string) {
    return this.https.get('url');
  }

  create(params:any, url?:string,  header?:any) {
    return this.https.put(url, params);
  }

  update(params:any, url?:string, header?:any) {
    return this.https.post(url, params);
  }

  delete(params?:any, url?:string,header?:any) {
    return this.https.delete(url)
  }

  deleteObject(params?:any, url?:string, header?:any) {
    return this.https.delete(url)
  }
}
