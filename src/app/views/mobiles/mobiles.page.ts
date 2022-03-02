import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import {IonSlides}          from '@ionic/angular';
import {ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'mobiles.page.html',
  styleUrls: ['mobiles.page.scss'],
})
export class MobilesPage {


  public productArray: Array<Product> = [];
  public product: Product;




  constructor(private router: Router, private productService: ProductService, private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    this.productService.getProducts().subscribe((p: Array<Product>) => {
      for (let product of p) {
        if (product.type=="mobile") {
          this.productArray.push(product);
        
        }
      }
      console.log(this.productArray)
    })
  }

}
