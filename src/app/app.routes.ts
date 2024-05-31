import { Routes } from '@angular/router';
import { LoginComponent } from './pages/admin/login/login.component';
import { LayoutComponent } from './pages/admin/layout/layout.component';
import { ProductsComponent } from './pages/admin/products/products.component';
import { CategoreisComponent } from './pages/admin/categoreis/categoreis.component';
import { LandingComponent } from './pages/website/landing/landing.component';
import { CategoryProductsComponent } from './pages/website/category-products/category-products.component';
import { WebproductsComponent } from './pages/website/web-products/web-products.component';
import { ProductCartComponent } from './pages/website/product-cart/product-cart.component';

export const routes: Routes = [
    {
        path:'',
        redirectTo:'shopping',
        pathMatch:'full'
    },
    {
        path:'login',
        component:LoginComponent
    },
    {
        path:'',
        component:LandingComponent,
        children:[
            {
                path:'shopping',
                component:WebproductsComponent
            },
            {
                path:'products/:id',
                component:CategoryProductsComponent
        
            },
            {
                path:'cart',
                component:ProductCartComponent
            }
        ]
    },
    {
        path:'',
        component:LayoutComponent,
        children:[
            {
                path:'products',
                component:ProductsComponent
            
            },
            {
                path:'category',
                component:CategoreisComponent
            }
           
        ]
    },
    {
        path: '**',
        redirectTo: 'login'
    }
];
