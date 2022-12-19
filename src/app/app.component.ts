import { Component } from '@angular/core';
// import{CurrencyPipe}from'@angular/common'


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'curr-converter';

  amount: number = 0;
  outputAmount: number = 0;

  convertAmount() {
    this.outputAmount = this.amount * 82.7
  }

}













