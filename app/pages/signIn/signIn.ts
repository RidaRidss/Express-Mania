import {Page, Alert ,NavController} from 'ionic-angular';
import {user} from './../user/user';

@Page({
  templateUrl: 'build/pages/signIn/signIn.html'
})
export class signIn {

    nav : NavController;
    constructor(nav: NavController){
        this.nav = nav;
    }
    
   userSign(){
   // let alert = Alert.create({
     // title: 'Friend!',
      //subTitle: 'Get Started!',
      //buttons: ['Ok']
    //});
   // this.nav.present(alert);
this.nav.push(user);
}
   
    
}