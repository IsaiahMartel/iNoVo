import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import {IonSlides}          from '@ionic/angular';
import {ViewChild } from '@angular/core';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm : string;
  @ViewChild('mySlider') slider: IonSlides;
  img: any;

  sliderOpts = {
    autoplay: true,
    zoom: {
      maxRatio: 5
    }
  };

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
        if (product.has_discount == true || product.is_new == true) {
          this.productArray.push(product);
        
        }
      }
      console.log(this.productArray)
    })
  }

}
