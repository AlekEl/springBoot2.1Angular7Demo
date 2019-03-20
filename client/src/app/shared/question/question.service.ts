import { Injectable } from '@angular/core';
import { HttpClient} from "@angular/common/http";
import { Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
  public API = "//localhost:8080";
  public QUESTION_API = this.API + "/questions";

  constructor(private http: HttpClient) { }

  getAll(): Observable<any> {
    return this.http.get(this.QUESTION_API);
  }

  get (id: string) {
    return this.http.get(this.QUESTION_API + "/" + id);
  }

  save(question: any): Observable<any> {
    let result: Observable<any>;
    if(question['href']) {
      result = this.http.put(question['href'], question);
    } else {
      result = this.http.post(this.QUESTION_API, question);
      console.log(question['href']);
    }
    console.log("LOOOK!")
    console.log(question);
    return result;
  }

  remove(href: string) {
    return this.http.delete(href);
  }
}
