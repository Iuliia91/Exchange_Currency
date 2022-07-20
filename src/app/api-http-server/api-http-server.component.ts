import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ApiHttpServerComponent {
  constructor(private httpClient: HttpClient) {}

  public get(from: string, to: string, amount: string, options?: any) {
    return this.httpClient.get(
      ` https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=${from}&to=${to}&amount=${amount}`,
      options
    );
  }
}
