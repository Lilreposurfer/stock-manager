import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';
import { Stock } from '../../types/stock';
import { StockService } from '../../services/stock.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-stock',
  standalone: true,
  imports: [CardComponent, CommonModule],
  templateUrl: './stock.component.html',
  styleUrl: './stock.component.css'
})
export class StockComponent {
  ListOfStocks: Stock[];
  constructor(private stockservice: StockService) {
    this.ListOfStocks = this.stockservice.getStocks();
   }
  }

