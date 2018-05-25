import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events ,ViewController} from 'ionic-angular';

@IonicPage()
@Component({
  selector: 'page-edit',
  templateUrl: 'edit.html',
})

export class EditPage {
 
 voicesend:boolean=false;

  constructor(public navCtrl: NavController, public navParams: NavParams,public event:Events,public viewctrl:ViewController) {
   
   }

  ionViewDidLoad() {
            console.log('ionViewDidLoad EditPage');
//      this.togglevalue=this.navParams.get('name') ;
// console.log(this.togglevalue);
          this.voicesend=this.navParams.get('onoff');
    }
//   updateItem($event){
//   	console.log("yes");
//   	console.log(event);
//   	let data={
//   		 param:this.togglevalue
//   	}
// this.eventt.publish('sucess',data);
//   }
  save(){
  // console.log(this.togglevalue);
	// this.eventt.publish('hi',this.togglevalue);
    this.event.publish('FromVoiceEdit',this.voicesend);
    this.viewctrl.dismiss();

  }

}
