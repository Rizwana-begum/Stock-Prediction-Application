import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service';
@Component({
  selector: 'app-infy',
  templateUrl: './infy.component.html',
  styleUrls: ['./infy.component.css']
})
export class InfyComponent implements OnInit {

  constructor(private stockservices:StockService) { }

  ngOnInit() {
  }

}
