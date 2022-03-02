import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { Product } from 'src/app/models/product/product';
import { ProductService } from 'src/app/services/product/product.service';
import { IonSlides } from '@ionic/angular';
import { ViewChild } from '@angular/core';
import { SearchForProductComponent } from 'src/app/components/search-for-product/search-for-product.component';


@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  searchTerm: string;
  @ViewChild('mySlider') slider: IonSlides;
  img: any;

  bigSliderOpts = {
    speed: 4000,
    autoplay: true,

  };



  public productArrayMobileFeaturedAndOffers: Array<Product> = [];
  public product: Product;
  public productArray: Array<Product> = [];



  constructor(private router: Router, private productService: ProductService, 
    private activatedRoute: ActivatedRoute, private searchForProduct : SearchForProductComponent
  ) { }


  ngOnInit(): void {
    this.loadInfo();
  }

  loadInfo() {
    console.log(this.searchForProduct.searchByName);
    
    this.productService.getProducts().subscribe((p: Array<Product>) => {
      for (let product of p) {
        if (product.type == "mobile" && (product.has_discount == true || product.is_new == true)) {
          this.productArrayMobileFeaturedAndOffers.push(product);

        }
      }

    })

    this.productService.getProducts().subscribe((p: Array<Product>) => {


      this.productArray = p;

    }
      
      
    )
  }

}
