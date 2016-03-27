
import {Page, Alert, NavController} from 'ionic-angular';

import {signIn} from './../signIn/signIn';

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
    
    nav : NavController
    
    constructor(nav: NavController){
        this.nav = nav;
    }
    
  SignIn(){
        this.nav.push(signIn);
    }
    
}