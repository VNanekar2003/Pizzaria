export interface Ingredient {
  id: string;
  iname?: string;  
  tname?: string;   
  price?: number;
  image?: string;
  type: 'veg' | 'nonveg';
}
