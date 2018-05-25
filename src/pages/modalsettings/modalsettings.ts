import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ViewController,Events,ActionSheetController } from 'ionic-angular';
import { Camera , CameraOptions} from '@ionic-native/camera';

/**
 * Generated class for the ModalsettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-modalsettings',
  templateUrl: 'modalsettings.html',
})
export class ModalsettingsPage {
public	param1:string;
public	param2:string;
public param3:string;
base64Image:string;
public name:string;
public ward:string;
public Department:string;
public docs:string;
public ne:string;
 constructor(public eventt:Events,public viewCntrl:ViewController,public actionSheetCtrl: ActionSheetController,public camera:Camera,public navCtrl: NavController, public navParams: NavParams) {
      }

 ionViewDidLoad() {
    this.ne=this.navParams.get('docName');
    this.Department=this.navParams.get('department');
    this.ward=this.navParams.get('Ward');
    this.base64Image=this.navParams.get('Immage');
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
          const options: CameraOptions = {
          destinationType: this.camera.DestinationType.DATA_URL,
          sourceType: this.camera.PictureSourceType.PHOTOLIBRARY
        }
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

savepage(){
    let data ={
	    	param1:this.ne,
		    param2:this.Department,
		    param3:this.ward,
		    param4:this.base64Image,

	    };
      this.eventt.publish('FromProfileEdit',data.param1,data.param2,data.param3,data.param4);
      this.viewCntrl.dismiss();
}

  closeModal(){
    this.viewCntrl.dismiss();
  }

}
