import { Component } from '@angular/core';
import { ProductService } from '../../../Services/Product/product.service';
import { Observable, map } from 'rxjs';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-categoreis',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './categoreis.component.html',
  styleUrl: './categoreis.component.css'
})
export class CategoreisComponent {
  products$:Observable<any>;
  constructor(private productService: ProductService){
    this.products$=this.productService.getCategory().pipe(map((item: any)=>{
      return item.data;
    })

    );

  }
  getAllCategory(){

  }

}
