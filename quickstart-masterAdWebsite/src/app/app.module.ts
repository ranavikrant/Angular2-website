import { NgModule, EventEmitter }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { AppComponent }  from './app.component';
import { HomeComponent }  from './component/Home/HomeComponent';
import {Navbar}  from './component/Navbar/NavbarComponent';


@NgModule({
  imports:      [ BrowserModule,FormsModule,ReactiveFormsModule],
  declarations: [ AppComponent,HomeComponent,Navbar],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
