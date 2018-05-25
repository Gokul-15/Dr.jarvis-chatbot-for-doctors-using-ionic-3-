import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController } from 'ionic-angular';
import {ModalController} from 'ionic-angular';
import {ModalsettingsPage} from '../modalsettings/modalsettings';
import {EditPage} from '../edit/edit';
import { Camera , CameraOptions} from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';

/**
 * Generated class for the PopovermenuPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-popovermenu',
  templateUrl: 'popovermenu.html',
})
export class PopovermenuPage {
// onoff:boolean;
docName:string;
  department:string;
 base6Image :string;



  constructor(public camera:Camera,public actionSheetCtrl:ActionSheetController,public modal:ModalController,public navCtrl: NavController, public navParams: NavParams,public view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PopovermenuPage');
  }
settings(){
	this.view.dismiss();
	let modal=this.modal.create(ModalsettingsPage,{docName:this.navParams.get('name'),department:this.navParams.get('department'),Ward:this.navParams.get('ward'),Immage:this.navParams.get('image')});
	
  modal.present();
  this.view.dismiss({
    image:null
  });



}
Edit(){
		this.view.dismiss();

let mod=this.modal.create(EditPage,{onoff:this.navParams.get('toggleoption')});
mod.present();
}
attach(){
    let actionSheet = this.actionSheetCtrl.create({
      title: 'select your image from',
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
        this.base6Image = "data:image/jpeg;base64," + imageData;
   this.view.dismiss({
  image:this.base6Image
});
    }, (err) => {
        console.log(err);
    });
      
          }
        },
        {
          text: 'Gallery',
          role: 'Gallery',
          handler: () => {
            const options: CameraOptions = {
        destinationType: this.camera.DestinationType.DATA_URL,
      sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
    }
   this.camera.getPicture(options).then((imageData) => {
    this.base6Image = "data:image/jpeg;base64," + imageData;
    this.view.dismiss({
  image:this.base6Image
});

  }, (err) => {
    console.log(err);
    });

          }
        }
      ]
    });
    actionSheet.present();

  
}

}

