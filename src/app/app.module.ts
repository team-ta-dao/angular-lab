import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/header/header.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomepageComponent } from './views/homepage/homepage.component';
import { ProductsComponent } from './views/products/products.component';
import { ProductDetailComponent } from './views/product-detail/product-detail.component';
import { NewletterComponent } from './component/newletter/newletter.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomepageComponent,
    ProductsComponent,
    ProductDetailComponent,
    NewletterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
