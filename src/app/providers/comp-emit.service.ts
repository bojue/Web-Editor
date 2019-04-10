import { Injectable, OnInit ,EventEmitter} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CompEmitService {
  eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  emitEvent(event) {
    console.log("service", event)
    this.eventEmitter.emit(event)
  }
  
  getEmitEvent() {
    return this.eventEmitter;
  }
}