import { Component } from '@angular/core';
import { IonicPage, NavParams ,ViewController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-modal',
  templateUrl: 'modal.html',
})
export class ModalPage {

  constructor( public navParams: NavParams,private view:ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalPage');
  }
closeModal(){

this.view.dismiss();
}
}
