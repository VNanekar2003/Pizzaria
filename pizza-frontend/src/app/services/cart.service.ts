import { Injectable } from '@angular/core';
import { Pizza } from '../models/pizza.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cartItems: Pizza[] = [];

  constructor() {
    this.loadCart();
  }

  getCartItems(): Pizza[] {
    return this.cartItems;
  }

  addToCart(pizza: Pizza): void {
    const existingItem = this.cartItems.find(item => item.id === pizza.id);

    if (existingItem) {
      existingItem.quantity = (existingItem.quantity ?? 0) + 1;
    } else {
      this.cartItems.push({
        ...pizza,
        quantity: 1
      });
    }

    this.saveCart();
  }

  removeFromCart(id: string): void {
    this.cartItems = this.cartItems.filter(item => item.id !== id);
    this.saveCart();
  }

  // ✅ REQUIRED BY CART PAGE
  increaseQuantity(pizzaId: string): void {
    const item = this.cartItems.find(i => i.id === pizzaId);
    if (item) {
      item.quantity = (item.quantity ?? 0) + 1;
      this.saveCart();
    }
  }

  // ✅ REQUIRED BY CART PAGE
  decreaseQuantity(pizzaId: string): void {
    const item = this.cartItems.find(i => i.id === pizzaId);
    if (!item) return;

    if ((item.quantity ?? 1) > 1) {
      item.quantity!--;
    } else {
      this.removeFromCart(pizzaId);
    }

    this.saveCart();
  }

  getTotalPrice(): number {
    return this.cartItems.reduce(
      (total, item) => total + item.price * (item.quantity ?? 1),
      0
    );
  }

  clearCart(): void {
    this.cartItems = [];
    this.saveCart();
  }

  isInCart(pizzaId: string): boolean {
    return this.cartItems.some(item => item.id === pizzaId);
  }

  private saveCart(): void {
    localStorage.setItem('cartItems', JSON.stringify(this.cartItems));
  }

  private loadCart(): void {
    const data = localStorage.getItem('cartItems');
    if (data) {
      this.cartItems = JSON.parse(data);
    }
  }
}
