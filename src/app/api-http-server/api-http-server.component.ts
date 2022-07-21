import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';
@Injectable()
export class ApiHttpServerComponent {
  constructor(private httpClient: HttpClient) {}

  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
    },
  };

  catchAutoError(error: any): Observable<Response> {
    if (error && error.error && error.error.message) {
      console.log(error.error.message);
    } else if (error && error.message) {
      console.log(error.message);
    } else {
      console.log(JSON.stringify(error));
    }

    return throwError(error);
  }

  public get(from: string, to: string, amount: string): Observable<any> {
    return this.httpClient
      .get(
        ` https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`,
        this.options
      )
      .pipe(catchError((error) => this.catchAutoError(error)));
  }
}
