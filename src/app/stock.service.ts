import { Injectable } from '@angular/core';
import {Stock,Stocks} from './stocks';
import { CONTENT,APPL} from './stock-content';

@Injectable()
export class StockService {
  private contents: Stock[]=CONTENT;
  private content: Stocks[]=APPL;

  constructor() { }

}
