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
    let _objectBool = _.isObject(params);
    let _baseUrl = url || this.baseURL;
    let _url = (!_objectBool && params !== undefined && params !== null) ? `${_baseUrl}/${params}`: _baseUrl;
    return _objectBool ? 
      this.https.get(_url, {
        params: params
      }) :
      this.https.get(_url);
  }

  getAll(url?:string) {
    let _url = url || this.baseURL;
    return this.https.get(_url);
  }

  create(params:any, url?:string,  header?:any) {
    let _url = url || this.baseURL;
    return this.https.post(_url, params);
  }

  update(params:any, url?:string, header?:any) {
    let _url = url || this.baseURL;
    return this.https.put(_url, params);
  }

  delete(params?:any, url?:string,header?:any) {
    console.log(params)
    return this.https.delete(url)
  }

  deleteObject(params?:any, url?:string, header?:any) {
    return this.https.delete(url)
  }
}
