import { Injectable, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class  EmitSubService{
  eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  setEmitEventSub(event) {
    this.eventEmitter.next(event)
  }
  
  getEmitEventSub() {
    return this.eventEmitter;
  }
}