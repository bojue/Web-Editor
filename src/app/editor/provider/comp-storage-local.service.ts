import { Injectable } from '@angular/core';
import { PageObject } from 'src/app/pages/workspace/model/page.model';
import { PageStyle } from '../model/setting-page-style.model';

@Injectable({
  providedIn: 'root'
})
export class CompStorageLocalService {
  devMode:String = 'web'; //开发模式，默认使用web
  constructor() { 

  }

  /**
   * 获取开发模式,
   * web:仅web前端静态数据支持，不需要服务端支持
   * api:需要服务端api支持 
   * default:默认使用web开发模式
  */
  getDevMode() {
    return this.devMode;
  }

  clearEditorLocalStorage() {
    this.clearPreViceComponent();
  }

  setPreViewPageInfo(page: any) {
    window.localStorage.setItem('preViewPage', page);
  }

  getPreViewPageInfo(){
    const item = window.localStorage.getItem('preViewPage')
    return typeof item === 'object' && item && JSON.parse(item)
  }

  setPreViewComponent(comp: any) {
    window.localStorage.setItem('previewComponent', comp);
  }

  getPreViceComponent() {
    return window.localStorage.getItem('previewComponent')
  }

  clearPreViceComponent() {
    window.localStorage.removeItem('previewComponent')
  }
}
