import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { StockComponent } from './components/stock/stock.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, StockComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'stock-manager';
}
