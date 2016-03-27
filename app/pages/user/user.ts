import {Page, NavController} from 'ionic-angular';
@Page({
  templateUrl: 'build/pages/user/user.html'
})
export class user {

    nav : NavController;
    constructor(nav: NavController){
        this.nav = nav;    }
           
}