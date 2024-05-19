import { Component, Input } from '@angular/core';
import { Stock } from '../../types/stock';
import { StockComponent } from '../stock/stock.component';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() stock!: Stock;
}
