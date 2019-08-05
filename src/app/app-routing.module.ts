import { NgModule, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import {RouterModule,Routes} from '@angular/router';
import { StockComponent } from './stock/stock.component';
import { InfyComponent } from './infy/infy.component';
import { ApplComponent } from './appl/appl.component';
import { PastSearchesComponent } from './past-searches/past-searches.component';




const routes: Routes=[
{path:'',redirectTo:'stock/*',pathMatch:'full'},
{path:'stock/*', component:StockComponent},
{path:'stock/*/infy/:#',component:InfyComponent},
{path:'stock/*/appl/:&',component:ApplComponent},
{path:'stock/*/past',component:PastSearchesComponent}
];
@NgModule({
  imports: [
    RouterModule.forRoot(routes),
    CommonModule
  ],
  exports:[RouterModule],
  declarations: []
})
export class AppRoutingModule { }
