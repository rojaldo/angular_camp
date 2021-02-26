import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class QuestionsService {

  baseUrl = 'https://opentdb.com/api.php?amount=10';

  constructor(public http: HttpClient) { }

  getQuestions(): Observable<any> {
    return this.http.get(this.baseUrl);
  }
}
