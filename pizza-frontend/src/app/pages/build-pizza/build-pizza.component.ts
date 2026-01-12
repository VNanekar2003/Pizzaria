import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CartService } from '../../services/cart.service';
import { Ingredient } from '../../models/ingredient.model';
import { Pizza } from '../../models/pizza.model';

@Component({
  selector: 'app-build-pizza',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './build-pizza.component.html',
  styleUrls: ['./build-pizza.component.css']
})
export class BuildPizzaComponent implements OnInit {

  private http = inject(HttpClient);
  private cartService = inject(CartService);
  private router = inject(Router);

  ingredients: Ingredient[] = [];
  selected: Ingredient[] = [];
  totalCost = 0;

  ngOnInit(): void {
    this.http
      .get<Ingredient[]>('http://localhost:3000/api/ingredients')
      .subscribe(data => this.ingredients = data);
  }

  toggleIngredient(ingredient: Ingredient, event: Event): void {
    const checked = (event.target as HTMLInputElement).checked;

    if (checked) {
      if (!this.selected.find(i => i.id === ingredient.id)) {
        this.selected.push(ingredient);
        this.totalCost += ingredient.price ?? 0;
      }
    } else {
      this.selected = this.selected.filter(i => i.id !== ingredient.id);
      this.totalCost -= ingredient.price ?? 0;
    }
  }

  buildPizza(): void {
    if (this.selected.length === 0) {
      alert('Please select at least one ingredient');
      return;
    }

    const isNonVeg = this.selected.some(i => i.type === 'nonveg');

    const customPizza: Pizza = {
      id: `CUSTOM_${Date.now()}`,
      name: 'Custom Pizza',
      type: isNonVeg ? 'nonveg' : 'veg',
      price: this.totalCost,
      image: '/custom-pizza.png',
      ingredients: this.selected,
      quantity: 1
    };

    this.cartService.addToCart(customPizza);
    this.router.navigate(['/cart']);
  }
}
