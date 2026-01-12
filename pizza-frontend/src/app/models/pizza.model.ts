import { Ingredient } from './ingredient.model';

export interface Pizza {
  id: string;
  name: string;
  type: 'veg' | 'nonveg' | 'custom';
  price: number;
  image: string;
  description?: string;

  ingredients?: Ingredient[]; 
  topping?: Ingredient[];     

  quantity?: number;
}
