import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import {IonSlides}          from '@ionic/angular';
import {ViewChild } from '@angular/core';

@Component({
  selector: 'app-products-list',
  templateUrl: './products-list.component.html',
  styleUrls: ['./products-list.component.scss'],
})
export class ProductsListComponent implements OnInit {
url=this.router.url;
 public type:String = this.url.split('/').pop();
 
  public productArray: Array<Product> = [];
  public product: Product;
public   project_id = this.activatedRoute.snapshot.paramMap



  constructor(private router: Router, private productService: ProductService, private activatedRoute: ActivatedRoute,
  ) { }


  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
  
    
    this.productService.getProducts().subscribe((p: Array<Product>) => {
      for (let product of p) {
        
          this.productArray.push(product);
        
        
      }
  
    })
    
  }

}







