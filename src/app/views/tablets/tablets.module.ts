import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TabletsPageRoutingModule } from './tablets-routing.module';

import { TabletsPage } from './tablets.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TabletsPageRoutingModule
  ],
  declarations: [TabletsPage]
})
export class TabletsPageModule {}
