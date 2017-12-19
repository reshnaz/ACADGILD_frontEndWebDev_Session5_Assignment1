import { Component } from '@angular/core';

@Component({
  // Defining selector as my-app-component
  selector: 'my-app-component',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

// Creating class called RootComponent
export class RootComponent {
  title = 'app';
}
