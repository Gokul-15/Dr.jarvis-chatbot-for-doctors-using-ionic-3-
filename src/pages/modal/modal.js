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
import { IonicPage, NavParams, ViewController } from 'ionic-angular';
let ModalPage = class ModalPage {
    constructor(navParams, view) {
        this.navParams = navParams;
        this.view = view;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad ModalPage');
    }
    closeModal() {
        this.view.dismiss();
    }
};
ModalPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-modal',
        templateUrl: 'modal.html',
    }),
    __metadata("design:paramtypes", [NavParams, ViewController])
], ModalPage);
export { ModalPage };
//# sourceMappingURL=modal.js.map