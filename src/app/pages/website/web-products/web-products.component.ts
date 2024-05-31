import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { ProductService } from '../../../Services/Product/product.service';
import { CartComponent } from '../../admin/cart/cart.component';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,RouterLink,FormsModule],
  templateUrl: './web-products.component.html',
  styleUrl: './web-products.component.css'
})
export class WebproductsComponent implements OnInit {
  productList: any[]=[];
  categoryList: any[]=[];
  

  constructor(private productService: ProductService, private router: Router, private cartService: CartService){

  }
  ngOnInit(): void {
    this.getProducts()
  }
  getProducts(){
    this.productService.getProducts().subscribe((res:any)=>{
      this.productList=res;
      console.log("products",this.productList);
    })
  }
  
  AddtoCart(product: any){
    console.log('check',product)
    this.cartService.addToCart(product);
    console.log("product added to cart");
  }

}
