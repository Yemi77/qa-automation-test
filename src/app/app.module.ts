import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {DataService} from "./data.service";
import { AppComponent } from './app.component';
import { BobComponent } from './bob/bob.component';

@NgModule({
  declarations: [
    AppComponent,
    BobComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
