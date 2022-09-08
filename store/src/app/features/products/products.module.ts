import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductComponent } from './product/product.component';
import { ProductsComponent } from './products.component';
import { ButtonModule } from 'src/app/shared/button/button.module';
import { InputModule } from 'src/app/shared/input/input.module';


@NgModule({
  declarations: [ProductsComponent, ProductComponent],
  imports: [CommonModule, ButtonModule, InputModule],
  exports: [ProductsComponent]
})
export class ProductsModule { }
