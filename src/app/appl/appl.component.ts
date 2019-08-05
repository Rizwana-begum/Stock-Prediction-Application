import { Component, OnInit } from '@angular/core';
import {StockService} from '../stock.service';
@Component({
  selector: 'app-appl',
  templateUrl: './appl.component.html',
  styleUrls: ['./appl.component.css']
})
export class ApplComponent implements OnInit {

  constructor(private stockservices:StockService) { }

  ngOnInit() {
  }

}
