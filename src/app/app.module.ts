import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { RootComponent } from './app.component';

// Mentioning component RootComponent in NgModule
@NgModule({
  declarations: [
    RootComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [RootComponent]
})
export class AppModule { }
