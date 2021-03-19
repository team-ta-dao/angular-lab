import { CategoriesComponent } from './views/categories/categories.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { ProductsComponent } from './views/products/products.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', component: HomepageComponent },
  { path: 'products', pathMatch: 'full', component: ProductsComponent },
  { path: 'products/:friendlyName', pathMatch: 'full', component: ProductDetailComponent },
  { path: 'categories', pathMatch: 'full', component: CategoriesComponent },
  { path: 'categories/:friendlyName', pathMatch: 'full', component: ProductDetailComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
