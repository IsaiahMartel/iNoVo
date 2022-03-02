import { Component, OnInit } from '@angular/core';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';

@Component({
  selector: 'app-others',
  templateUrl: './others.page.html',
  styleUrls: ['./others.page.scss'],
})
export class OthersPage implements OnInit {

  constructor(private productList : ProductsListComponent) { }

  ngOnInit() {
    this.productList.type="other"
  }

}
