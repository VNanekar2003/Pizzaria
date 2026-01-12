import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-order-pizza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './order-pizza.component.html',
  styleUrls: ['./order-pizza.component.css']
})
export class OrderPizzaComponent implements OnInit {

  private http = inject(HttpClient);
  cartService = inject(CartService);

  pizzas: Pizza[] = [];

  ngOnInit(): void {
    this.http
      .get<Pizza[]>('http://localhost:3000/api/pizzas')
      .subscribe(data => this.pizzas = data);
  }

  addToCart(pizza: Pizza): void {
    this.cartService.addToCart(pizza);
  }

  removeFromCart(pizza: Pizza): void {
    this.cartService.removeFromCart(pizza.id);
  }

  isPizzaInCart(pizza: Pizza): boolean {
    return this.cartService.isInCart(pizza.id);
  }
}
