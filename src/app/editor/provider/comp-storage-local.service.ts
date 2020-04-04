import { Injectable } from '@angular/core';
import { PageObject } from 'src/app/pages/workspace/model/page.model';
import { PageStyle } from '../model/setting-page-style.model';

@Injectable({
  providedIn: 'root'
})
export class CompStorageLocalService {

  constructor() { 

  }

  clearEditorLocalStorage() {
    this.clearPreViceComponent();
  }

  setPreViewPageInfo(page) {
    window.localStorage.setItem('preViewPage', page);
  }

  getPreViewPageInfo(){
    return JSON.parse(window.localStorage.getItem('preViewPage'))
  }

  setPreViewComponent(comp) {
    window.localStorage.setItem('previewComponent', comp);
  }

  getPreViceComponent() {
    return window.localStorage.getItem('previewComponent')
  }

  clearPreViceComponent() {
    window.localStorage.removeItem('previewComponent')
  }
}
