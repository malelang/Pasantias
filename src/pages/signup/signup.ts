import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers';
import { MainPage } from '../';
import {CardsPage} from '../cards/cards'
@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { name: string, email: string, password: string, university: string, area:string } = {
    name: 'Test Human',
    email: 'test@example.com',
    password: 'test',
    university: 'default',
    area:'default'
  };

  universidades:String[] =["U. del Cauca","U. Antonio Nariño","FUP","U. Cooperativa","ESAP","UNAD"]
  areas:String[] = ["Ingeniería Electrónica", "Ciencias de la Salud","Ciencias Sociales","Ciencias Naturales",
  "Derecho y Ciencias Políticas","Agropecuarias"]
  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    this.user.signup(this.account).subscribe((resp) => {
      this.navCtrl.push(CardsPage);
    }, (err) => {

      this.navCtrl.push(CardsPage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
