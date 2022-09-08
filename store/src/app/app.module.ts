import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { CartModule } from './features/cart/cart.module';
import { ProductsModule } from './features/products/products.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, CoreModule, ProductsModule, CartModule],
  bootstrap: [AppComponent]
})
export class AppModule { }
