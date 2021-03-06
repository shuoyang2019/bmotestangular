import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { retry, catchError } from 'rxjs/operators';
import { Person } from '../datatypes/person';

@Injectable({
  providedIn: 'root'
})
export class PersonserviceService {
  serviceUrl = 'http://bmotestbackendapi.us-east-2.elasticbeanstalk.com/getPersonList';
  constructor(private http: HttpClient) { }

  private handleError(error) {
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      console.error('An error occurred:', error.error.message);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong,
      console.error(
        `Backend returned code ${error.status}, ` +
        `body was: ${error.error}`);
    }
    // return an observable with a user-facing error message
    return throwError(
      'Something bad happened; please try again later.');
  }

  getPersonList(): Observable<Person[]> {
    console.log(this.serviceUrl);
    return this.http.get<Person[]>(this.serviceUrl).pipe(
      retry(3),
      catchError(this.handleError)
    );
  }
}
