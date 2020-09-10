import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  localData = [
    { Name: 'John', Age: 29 },
    { Name: 'Alice', Age: 27 },
    { Name: 'Jessica', Age: 31 },
  ];

  title = 'My Ignite UI project';
}
