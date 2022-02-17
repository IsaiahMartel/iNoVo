import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';
import {Ng2SearchPipeModule} from 'ng2-search-filter';
// import { AutomaticThreeSliderComponent } from 'src/app/components/automatic-three-slider/automatic-three-slider/automatic-three-slider.component';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule, 
    Ng2SearchPipeModule,
    // AutomaticThreeSliderComponent
  ],
  declarations: [HomePage]
})
export class HomePageModule {}
