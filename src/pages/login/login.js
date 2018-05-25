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
import { IonicPage, NavController, Events, ViewController } from 'ionic-angular';
// import {SignupPage} from '../Signup/Signup';
import { SignupPage } from '../signup/signup';
import { AlertController } from 'ionic-angular';
import { ChatPage } from '../chat/chat';
let LoginPage = class LoginPage {
    constructor(view, event, alertCtrl, navCtrl) {
        this.view = view;
        this.event = event;
        this.alertCtrl = alertCtrl;
        this.navCtrl = navCtrl;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad LoginPage');
        let checking = this.event.subscribe('firstpageconfirmation', (data) => {
            // this.check=checking;
            console.log(data.phnum);
            console.log(data.pin);
            console.log(data);
            this.phnum1 = data.phnum;
            this.pin1 = data.pin;
            this.hos_name = data.hospital;
            this.l_name = data.lastname;
            this.f_name = data.firstname;
            console.log(this.hos_name);
        });
    }
    login1() {
        if (this.phonenum == 9003457577 && this.pin == 1233 && this.hospital) {
            let dataa = {
                hos_name: this.hospital,
                fir_name: 'Raj',
                lst_name: 'Soloman',
                phn_num: this.phonenum
            };
            this.navCtrl.push(ChatPage, {
                'titlee': dataa
            });
        }
        else if (this.phonenum == this.phnum1 && this.pin == this.pin1 && this.hospital == this.hos_name) {
            // let dataa=this.hospital;
            // console.log(dataa);
            // let fname=this.f_name;
            // let lname=this.l_name;
            let dataa = {
                hos_name: this.hospital,
                fir_name: this.f_name,
                lst_name: this.l_name,
                phn_num: this.phonenum
            };
            this.navCtrl.push(ChatPage, {
                'titlee': dataa
            });
        }
        else {
            let alert = this.alertCtrl.create({
                title: 'Wrong Creditials',
                subTitle: 'Please enter valid one',
                buttons: ['ok']
            });
            alert.present();
        }
    }
    signup() {
        this.navCtrl.push(SignupPage);
    }
};
LoginPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-login',
        templateUrl: 'login.html',
    }),
    __metadata("design:paramtypes", [ViewController, Events, AlertController, NavController])
], LoginPage);
export { LoginPage };
//# sourceMappingURL=login.js.map