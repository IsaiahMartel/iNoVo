import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPageRoutingModule } from './register-routing.module';

import { RegisterPage } from './register.page';
import { RegisterWithValidationsComponent } from 'src/app/components/register-with-validations/register-with-validations.component';
import {Storage} from  '@ionic/storage';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterPageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [RegisterPage, RegisterWithValidationsComponent],
  providers: [RegisterWithValidationsComponent, Storage]
})
export class RegisterPageModule {}
