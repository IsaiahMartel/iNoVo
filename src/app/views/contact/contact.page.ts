
import { Component, OnInit, HostListener, Directive } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth/auth.service';
import { User } from 'src/app/models/user/user';
import { Storage } from '@ionic/storage';
import { AlertController } from '@ionic/angular';
import { Validators, FormControl, FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.page.html',
  styleUrls: ['./contact.page.scss'],
})
export class ContactPage implements OnInit {
  contactForm: FormGroup;
  passwordNotMatch: boolean;
  private errors: String = null;
  constructor(private router: Router, private authService: AuthService, private storage: Storage, private alertController: AlertController, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.contactForm = this.formBuilder.group({
      name: ['', [Validators.required, Validators.minLength(3)]],
      email: ['', [Validators.required, Validators.pattern('[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,3}$')]],
      questions: ['', Validators.compose([
        Validators.required,
       

      ])],
  
    }, 
    
      //{validator: RegisterPage.passwordsMatch}
    );
  }





 
  async presentAlert(message: string) {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
      header: 'Error',
      subHeader: message,
      message: 'Inténtalo de nuevo.',
      buttons: ['OK']
    });

    await alert.present();
  }
}











