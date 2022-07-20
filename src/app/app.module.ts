import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { HeaderComponent } from './_pages/header/header.component';
import { ConvertComponentComponent } from './_pages/convert-component/convert-component.component';
import { FormsModule } from '@angular/forms';
import { ApiHttpServerComponent } from './api-http-server/api-http-server.component';

@NgModule({
  declarations: [AppComponent, HeaderComponent, ConvertComponentComponent],
  imports: [BrowserModule, FormsModule, HttpClientModule],
  providers: [ApiHttpServerComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
