import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events } from 'ionic-angular';
  import {Http,Headers} from '@angular/http';
  import { HttpClient } from "@angular/common/http";
    import {Observable} from 'rxjs/Rx';


/**
 * Generated class for the SignupPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html',
})
export class SignupPage {

phonenum:string;
pin1:number;
pin2:number;
phnum:any;
pin:any;
hospitalsignup:any;
hospital:any;
f_name:any;
l_name:any;
firstname:any;
lastname:any;
  constructor(public event:Events,public navCtrl: NavController, public navParams: NavParams,private http:Http) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad SignupPage');
  }

Firstpage()
{

	if(this.pin1==this.pin2){

		let data={
			phnum:this.phonenum,
			pin:this.pin1,
			hospital:this.hospitalsignup,
			firstname:this.f_name,
			lastname:this.l_name
		};
		this.event.publish('firstpageconfirmation',data);
			 let headers = new Headers();
               headers.append('Content-Type', 'application/json');
               this.http.post('http://192.168.1.3:8081/signupdata',(data),{headers:headers}).map(res => res.json()).subscribe(data=>{
                 console.log(data);
               });

  //        this.http.post('http://192.168.1.4/signupdata',(data),{headers:headers})
  // .map(res => res.json())
  // .subscribe(data => {
  //                             console.log(data);
  //                       });    
  // //        
		 

		this.navCtrl.popToRoot();  

	}
	
}
}
