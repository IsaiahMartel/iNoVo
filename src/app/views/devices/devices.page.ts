import { Component, OnInit } from '@angular/core';
import { ProductsListComponent } from 'src/app/components/products-list/products-list.component';

@Component({
  selector: 'app-devices',
  templateUrl: './devices.page.html',
  styleUrls: ['./devices.page.scss'],
})
export class DevicesPage implements OnInit {

  constructor(private productList : ProductsListComponent) {
  }

  ngOnInit() {
    
    
  }

}
