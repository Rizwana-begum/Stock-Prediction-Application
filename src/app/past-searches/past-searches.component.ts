import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service';
@Component({
  selector: 'app-past-searches',
  templateUrl: './past-searches.component.html',
  styleUrls: ['./past-searches.component.css']
})
export class PastSearchesComponent implements OnInit {

  constructor(private stockservices:StockService, private stockservice:StockService) { }

  ngOnInit() {
  }

}
