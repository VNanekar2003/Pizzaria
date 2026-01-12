import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { OrderPizzaComponent } from './pages/order-pizza/order-pizza.component';
import { CartComponent } from './pages/cart/cart.component';
import { BuildPizzaComponent } from './pages/build-pizza/build-pizza.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },           
  { path: 'order', component: OrderPizzaComponent },
  { path: 'build', component: BuildPizzaComponent },
  { path: 'cart', component: CartComponent }
];

