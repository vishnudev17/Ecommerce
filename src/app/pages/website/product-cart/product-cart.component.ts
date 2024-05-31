import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../../../Services/cart.service';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../Services/Product/product.service';

@Component({
  selector: 'app-product-cart',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './product-cart.component.html',
  styleUrl: './product-cart.component.css'
})
export class ProductCartComponent implements OnInit{
  cartItems: any[]=[];
  quantity: number=0;
  TotalPrice: number=0;

  constructor(private cartService: CartService,private productService: ProductService){

  }
  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart=>{
      this.cartItems = cart;
    console.log("cart-Items",cart);
    this.CalculatePrice()
 
    });
  }
  increment() {
    this.quantity++
  }

  decrement() {
    if (this.quantity > 0) {
      this.quantity--;
    }
  }
  CalculatePrice(){
     this.cartItems.forEach(item=>{
      this.TotalPrice+=(item.price);
      console.log("price",this.TotalPrice);
     })
  }

 


}
