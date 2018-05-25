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
import { IonicPage, NavController, NavParams, ViewController, Events, ActionSheetController } from 'ionic-angular';
import { Camera } from '@ionic-native/camera';
/**
 * Generated class for the ModalsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ModalsettingsPage = class ModalsettingsPage {
    constructor(eventt, viewCntrl, actionSheetCtrl, camera, navCtrl, navParams) {
        this.eventt = eventt;
        this.viewCntrl = viewCntrl;
        this.actionSheetCtrl = actionSheetCtrl;
        this.camera = camera;
        this.navCtrl = navCtrl;
        this.navParams = navParams;
    }
    ionViewDidLoad() {
        this.ne = this.navParams.get('docName');
        this.Department = this.navParams.get('department');
        this.ward = this.navParams.get('Ward');
        this.base64Image = this.navParams.get('Immage');
        console.log('ionViewDidLoad ModalsettingsPage');
    }
    presentActionSheet() {
        let actionSheet = this.actionSheetCtrl.create({
            title: 'Modify your profile picture',
            buttons: [
                {
                    text: 'Camera',
                    role: 'Camera',
                    handler: () => {
                        this.camera.getPicture({
                            destinationType: this.camera.DestinationType.DATA_URL,
                            quality: 100,
                        }).then((imageData) => {
                            // imageData is a base64 encoded string
                            this.base64Image = "data:image/jpeg;base64," + imageData;
                        }, (err) => {
                            console.log(err);
                        });
                    }
                },
                {
                    text: 'Gallery',
                    role: 'Gallery',
                    handler: () => {
                        const options = {
                            destinationType: this.camera.DestinationType.DATA_URL,
                            sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
                        };
                        this.camera.getPicture(options).then((imageData) => {
                            this.base64Image = "data:image/jpeg;base64," + imageData;
                        }, (err) => {
                            console.log(err);
                        });
                    }
                }
            ]
        });
        actionSheet.present();
    }
    savepage() {
        let data = {
            param1: this.ne,
            param2: this.Department,
            param3: this.ward,
            param4: this.base64Image,
        };
        this.eventt.publish('hell', data.param1, data.param2, data.param3, data.param4);
        this.viewCntrl.dismiss();
    }
    closeModal() {
        this.viewCntrl.dismiss();
    }
};
ModalsettingsPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-modalsettings',
        templateUrl: 'modalsettings.html',
    }),
    __metadata("design:paramtypes", [Events, ViewController, ActionSheetController, Camera, NavController, NavParams])
], ModalsettingsPage);
export { ModalsettingsPage };
//# sourceMappingURL=modalsettings.js.map