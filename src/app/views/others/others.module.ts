import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OthersPageRoutingModule } from './others-routing.module';

import { OthersPage } from './others.page';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OthersPageRoutingModule
  ],
  declarations: [OthersPage, ProductsListComponent],
  providers: [ProductsListComponent]
})
export class OthersPageModule {}
