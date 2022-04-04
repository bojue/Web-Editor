import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserAgentService {

  constructor() { }

  isMac = function() { 
    return /macintosh|mac os x/i.test(navigator.userAgent); 
  }();

  isWindows = function() { 
    return /windows|win32/i.test(navigator.userAgent);
  }(); 
}
