import { Component } from '@angular/core';

// example type
type CallbackFunction = (message: string) => void;

let numbers: any[]= [1, 2, 3];
numbers.push("");
numbers.push(2);

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'mfaapplication';

  printHello(callback: CallbackFunction, message: string): void {
    callback(message);
  }

  constructor() {
    this.printHello((message: string) => console.log(message), "Hello space!");
  }

}
