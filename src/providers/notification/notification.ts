import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class NotificationProvider {

  constructor(public http: HttpClient) {
      
  }

}
