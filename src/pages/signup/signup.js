var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let SignupPage = class SignupPage {
    constructor(event, navCtrl, navParams) {
        this.event = event;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad SignupPage');
    }
    Firstpage() {
        if (this.pin1 == this.pin2) {
            let data = {
                phnum: this.phonenum,
                pin: this.pin1,
                hospital: this.hospitalsignup,
                firstname: this.f_name,
                lastname: this.l_name
            };
            this.event.publish('firstpageconfirmation', data);
            this.navCtrl.popToRoot();
        }
    }
};
SignupPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-signup',
        templateUrl: 'signup.html',
    }),
    __metadata("design:paramtypes", [Events, NavController, NavParams])
], SignupPage);
export { SignupPage };
//# sourceMappingURL=signup.js.map