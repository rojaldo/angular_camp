import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class ApodService {

  defaultUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY';

  constructor(public http: HttpClient) { }

  getRequest(url?: string): Observable<any> {
    if (url) {
      return this.http.get(url);
    } else {
      return this.http.get(this.defaultUrl);
    }
  }
}
