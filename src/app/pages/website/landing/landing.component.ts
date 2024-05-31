import { Component, OnInit, ViewChild, viewChild } from '@angular/core';
import { ProductService } from '../../../Services/Product/product.service';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Router, RouterLink, RouterOutlet } from '@angular/router';
import { CategoryProductsComponent } from '../category-products/category-products.component';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [CommonModule, FormsModule, RouterLink, RouterOutlet],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.css'
})
export class LandingComponent implements OnInit {
  productList: any[] = [];
  categoryList: any[] = [];
  categoryID: string = '';
  categorycomponent: any;
  // @ViewChild ('CategoryProductsComponent') CategoryProductsComponent!:CategoryProductsComponent;

  constructor(private productService: ProductService, private router: Router ,) {
  }
  ngOnInit(): void {
    this.getProducts()
    this.getAllCategory()
  }
  getProducts() {
    this.productService.getProducts().subscribe((res: any) => {
      this.productList = res;
      console.log(this.productList);
    })
  }
  getAllCategory() {
    this.productService.getCategory().subscribe((res: any) => {
      console.log('res', res)
      this.categoryList = res.data;
      console.log(this.categoryList);
    })

  }
  onNavigatesToProduct(id: number) {
    this.router.navigate(['/products', id])
    this.categoryID = id.toString();
    this.productService.samplleSub.next(this.categoryID)
  }
  onNavigatesTocart(){
    this.router.navigate(['/cart'])
  }
  onNavigateToHome(){
    this.router.navigate(['/shopping'])
  }


}


