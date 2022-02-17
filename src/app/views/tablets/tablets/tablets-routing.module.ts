import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabletsPage } from './tablets.page';

const routes: Routes = [
  {
    path: '',
    component: TabletsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabletsPageRoutingModule {}
