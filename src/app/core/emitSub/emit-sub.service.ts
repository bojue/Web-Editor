import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class  EmitSubService{
  event: EventEmitter<any> = new EventEmitter();

  constructor() {}

  getEmitEvent(): Observable<any> {
    return this.event.asObservable();
  }
  setEmitEvent(type?: string, data?:any) {
      let params = {
          data: data,
          type: type || 'update',
      };
      this.event.next(params);
  }
}