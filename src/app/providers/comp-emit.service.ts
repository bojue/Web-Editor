import { Injectable, OnInit ,EventEmitter} from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CompEmitService {
  eventEmitter: EventEmitter<any> = new EventEmitter();

  constructor() {}

  setEmitEvent(event) {
    this.eventEmitter.next(event)
  }
  
  getEmitEvent() {
    return this.eventEmitter.subscribe();
  }
}