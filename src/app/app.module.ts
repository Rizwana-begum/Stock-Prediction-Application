import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { StockComponent } from './stock/stock.component';
import { InfyComponent } from './infy/infy.component';
import { ApplComponent } from './appl/appl.component';
import { PastSearchesComponent } from './past-searches/past-searches.component';
import { AppRoutingModule } from './/app-routing.module';


@NgModule({
  declarations: [
    AppComponent,
    StockComponent,
    InfyComponent,
    ApplComponent,
    PastSearchesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
