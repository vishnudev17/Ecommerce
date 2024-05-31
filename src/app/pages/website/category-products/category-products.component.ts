import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../../Services/Product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CartService } from '../../../Services/cart.service';

@Component({
  selector: 'app-category-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './category-products.component.html',
  styleUrl: './category-products.component.css'
})
export class CategoryProductsComponent implements OnInit{
  filteredproductList: any[]=[];
  categoryList: any[]=[];
  constructor(private productService: ProductService, private cartservice: CartService){

  }
  ngOnInit(): void {

  this.productService.samplleSub.subscribe((e:any)=>{
  this.getProductsByCategory(e);

  })
  }
 
  getProductsByCategory(categoryId: string){
    this.productService.getProductsByCategory(categoryId).subscribe((res:any)=>{
      this.filteredproductList=res;
      console.log(this.filteredproductList);
    })

  }
  
  AddtoCart(product: any){
    console.log('check',product)
    this.cartservice.addToCart(product);
    console.log("product added to cart");
  }
 


}
