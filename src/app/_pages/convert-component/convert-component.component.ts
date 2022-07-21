import { Component, OnInit } from '@angular/core';

import { ApiHttpServerComponent } from 'src/app/api-http-server/api-http-server.component';

@Component({
  selector: 'app-convert-component',
  templateUrl: './convert-component.component.html',
  styleUrls: ['./convert-component.component.css'],
})
export class ConvertComponentComponent implements OnInit {
  defaultValue = 'UAH';
  constructor(private apiServer: ApiHttpServerComponent) {}
  defaultAmount = '1';
  ConvertingValsue = '';

  converToValue = 'USD';
  currencyValue = [
    { id: 1, name: 'UAH' },
    { id: 2, name: 'USD' },
    { id: 4, name: 'EUR' },
  ];
  currencyToValue = [
    { id: 1, name: 'USD' },
    { id: 2, name: 'UAH' },
    { id: 4, name: 'EUR' },
  ];
  options = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Key': 'd891d3ad3cmshd44c450c381af3fp14e2fcjsn300b575d9d12',
      'X-RapidAPI-Host': 'currency-converter5.p.rapidapi.com',
    },
  };

  handlerAddValue(event: any) {
    const value = event.target.value;
    this.defaultAmount = value;

    this.apiServer
      .get(this.defaultValue, this.converToValue, value, this.options)
      .subscribe((data) => {
        this.handleConvertAmoutn(data);
      });
  }

  handlerAddValueToFrom(event: any) {
    const value = event.target.value;
    this.ConvertingValsue = value;

    this.apiServer
      .get(this.converToValue, this.defaultValue, value, this.options)
      .subscribe((data) => {
        this.handleTry(data);
      });
  }

  handleTry(data: any) {
    this.defaultAmount = data.rates[this.defaultValue].rate_for_amount;
  }
  handleExchangeToValue(value: any) {
    this.converToValue = value;
    this.apiServer
      .get(value, this.defaultValue, this.ConvertingValsue, this.options)
      .subscribe((data) => {
        this.handleConvert(data);
      });
  }

  handleConvert(data: any) {
    this.defaultAmount = data.rates[this.defaultValue].rate_for_amount;
  }
  handleExchangeFromValue(value: any) {
    this.defaultValue = value;
    this.apiServer
      .get(value, this.converToValue, this.defaultAmount, this.options)
      .subscribe((data) => {
        this.handleConvertAmoutn(data);
      });
  }

  handleConvertAmoutn(data: any) {
    this.ConvertingValsue = data.rates[this.converToValue].rate_for_amount;
  }
  ngOnInit(): void {
    this.apiServer
      .get(
        this.defaultValue,
        this.converToValue,
        this.defaultAmount,
        this.options
      )
      .subscribe((data) => {
        this.handleConvertAmoutn(data);
      });
  }
}
