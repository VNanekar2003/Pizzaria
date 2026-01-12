import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartService } from '../../services/cart.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {

  cartService = inject(CartService);
  private router = inject(Router);

  increase(pizzaId: string): void {
    this.cartService.increaseQuantity(pizzaId);
  }

  decrease(pizzaId: string): void {
    this.cartService.decreaseQuantity(pizzaId);
  }

  removeItem(id: string): void {
    this.cartService.removeFromCart(id);
  }

  clearCart(): void {
    this.cartService.clearCart();
  }

  payNow(): void {
    if (this.cartService.getCartItems().length === 0) {
      alert('Your cart is empty');
      return;
    }

    alert('Order placed successfully!');
    this.cartService.clearCart();
    this.router.navigate(['/order']);
  }
}
