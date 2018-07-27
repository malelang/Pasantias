import { Component } from '@angular/core';
import { IonicPage, NavController, ToastController  } from 'ionic-angular';
import { MainPage } from '../';
import { User } from '../../providers';
/**
 * The Welcome Page is a splash page that quickly describes the app,
 * and then directs the user to create an account or log in.
 * If you'd like to immediately put the user onto a login/signup page,
 * we recommend not using the Welcome page.
*/
@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html'
})
export class WelcomePage {
  account: { email: string, password: string } = {
    email: 'hello',
    password: 'world'
  };

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,) {

  }

  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      this.navCtrl.push(MainPage);
    }, (err) => {
      this.navCtrl.push(MainPage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: "No se ha podido establecer sesion",
        duration: 1000,
        position: 'top'
      });
      toast.present();
    });
  }

  signup() {
    this.navCtrl.push('SignupPage');
  }
}
