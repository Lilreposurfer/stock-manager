import { Injectable } from '@angular/core';
import { Stock } from '../types/stock';

@Injectable({
  providedIn: 'root'
})
export class StockService {
  listOfStocks: Stock[] = [
    {
      id: 1,
      name: 'BMW',
      price: 100,
      previousPrice: 200,
      side: 'up',
      date: new Date()
    },
    {
      id: 2,
      name: 'Google',
      price: 200,
      previousPrice: 300,
      side: 'down',
      date: new Date()
    },
    {
      id: 3,
      name: 'Apple',
      price: 300,
      previousPrice: 400,
      side: 'up',
      date: new Date()
    }
  ];
  getStocks(): Stock[] {
    return this.listOfStocks;
  }
}
