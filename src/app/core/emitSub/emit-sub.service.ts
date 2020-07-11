import { Injectable, EventEmitter } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class  EmitSubService{
  event: EventEmitter<any> = new EventEmitter();

  constructor() {}

  getEmitEvent(): Observable<any> {
    return this.event.asObservable();
  }
  setEmitEvent(type: string, data?:any) {
    let eventSub = {
        data: data,
        type: type,
    };
    this.event.next(eventSub);
  }
}