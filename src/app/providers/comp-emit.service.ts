import { Injectable, OnInit ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompEmitService {
  eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  emitEvent(event) {
    this.eventEmitter.emit(event)
  }
  
  getEmitEvent() {
    return this.eventEmitter;
  }

  setChildComp(comp) {
    this.eventEmitter.emit({
      type:'child-comp',
      data: comp
    })
  }

  getEmitter() {
    return this.eventEmitter
  }
}