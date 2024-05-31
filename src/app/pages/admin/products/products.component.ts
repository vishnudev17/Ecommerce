import { CommonModule } from '@angular/common';
import { Component ,OnInit} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ProductService } from '../../../Services/Product/product.service';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [CommonModule,FormsModule],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent implements OnInit{
 
  productObj: any={
  "sku": "",
 "name": "",
 "price": 0,
 "shortName": "",
 "description": "",
 "categoryName":"",
 "CreatedDate": new Date(),
 "deliveryTimeSpan": "",
 "categoryId": 0,
 "imageUrl": ""
}
categoryList: any[]=[]
productList: any[]=[]
constructor(private productservice: ProductService){

}
ngOnInit(): void {
  this.getProducts()
  this.getAllCategory()
  
}
onCategoryChange(event: any){
  const selectedCategoryId= event.target.value;
  const selectedCategory=this.categoryList.find(cat=> cat.categoryId===+selectedCategoryId);
  if(selectedCategory){
    this.productObj.categoryName=selectedCategory.categoryName;
  }

}
getAllCategory(){
  this.productservice.getCategory().subscribe((res: any) =>{
    console.log('res',res)
    this.categoryList=res.data;
    console.log(this.categoryList);
  })
  
}
getProducts(){
  this.productservice.getProducts().subscribe((res:any)=>{
    this.productList=res;
  })
    

}
onSave(){
  if(this.editing!==true){
    console.log(this.productObj.id);
    this.productservice.saveProduct(this.productObj).subscribe((res: any)=>{
      alert('Product created');
      //this.resetForm();
      this.getProducts();
      
    })
  }else{
    this.productservice.updateProduct(this.productObj).subscribe((res: any) => {
      alert('Product updated');
      this.editing=false;
     // this.resetForm();
      this.getProducts();
    })
  }this.resetForm;
}
editing:boolean=false;
onEdit(product: any){
  this.editing=true;
  this.productObj={...product};
}
onDelete(id: number){
  this.productservice.deleteProduct(id).subscribe((res: any)=>{
    alert('product Deleted')
    this.getProducts();
  })
}
resetForm(){
  this.productObj={
    id: 0,
    sku: '',
    name: '',
    price: 0,
    shortName: '',
    categoryName:'',
    description: '',
    deliveryTimeSpan: '',
    categoryId: 0,
    imageUrl: ''
  };

}

 sidePanelVisible: boolean= false;
 openSidePanel(){
  this.sidePanelVisible=true;
}
closeSidePanel(){
  this.sidePanelVisible=false;
}
}
  

