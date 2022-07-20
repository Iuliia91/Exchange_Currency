import { getLocaleDateFormat } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ApiHttpServerComponent } from 'src/app/api-http-server/api-http-server.component';
export class Friend {
  constructor(public id: number, public header: string) {}
}

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent implements OnInit {
  usdAmount = 0;
  euroAmount = 0;
  constructor(private apiServer: HttpClient) {}

  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
    },
  };
  public contacts = {
    name: 'euro',
    Euroimage: 'assets/img/euro-266.svg',
    Dollarimage: 'assets/img/dollar.png',
    Urkimage: 'assets/img/urk.png',
  };
  handleConvertAmount(data: any) {
    this.usdAmount = data.rates.USD.rate;
    this.euroAmount = data.rates.EUR.rate;
  }

  ngOnInit() {
    this.apiServer
      .get(
        'https://currency-converter5.p.rapidapi.com/currency/convert?format=json&from=UAH&to=USD%2C%20EUR&amount=1',
        this.options
      )
      .subscribe((data) => this.handleConvertAmount(data));
  }
}
