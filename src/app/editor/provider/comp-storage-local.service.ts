import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompStorageLocalService {

  constructor() { 

  }

  clearEditorLocalStorage() {
    this.clearPreViceComponent();
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
