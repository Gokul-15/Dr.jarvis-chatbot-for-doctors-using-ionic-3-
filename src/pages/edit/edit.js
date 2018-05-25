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
import { IonicPage, NavController, NavParams, Events, ViewController } from 'ionic-angular';
let EditPage = class EditPage {
    constructor(navCtrl, navParams, event, viewctrl) {
        this.navCtrl = navCtrl;
        this.navParams = navParams;
        this.event = event;
        this.viewctrl = viewctrl;
        this.voicesend = false;
    }
    ionViewDidLoad() {
        console.log('ionViewDidLoad EditPage');
        //      this.togglevalue=this.navParams.get('name') ;
        // console.log(this.togglevalue);
        this.voicesend = this.navParams.get('onoff');
    }
    //   updateItem($event){
    //   	console.log("yes");
    //   	console.log(event);
    //   	let data={
    //   		 param:this.togglevalue
    //   	}
    // this.eventt.publish('sucess',data);
    //   }
    save() {
        // console.log(this.togglevalue);
        // this.eventt.publish('hi',this.togglevalue);
        this.event.publish('hello', this.voicesend);
        this.viewctrl.dismiss();
    }
};
EditPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-edit',
        templateUrl: 'edit.html',
    }),
    __metadata("design:paramtypes", [NavController, NavParams, Events, ViewController])
], EditPage);
export { EditPage };
//# sourceMappingURL=edit.js.map