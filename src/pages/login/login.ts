
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,Events ,ViewController } from 'ionic-angular';
// import {SignupPage} from '../Signup/Signup';
import {SignupPage} from '../signup/signup';
import { AlertController } from 'ionic-angular';
import  {ChatPage} from '../chat/chat';
 import {Http,Headers} from '@angular/http';
  import { HttpClient } from "@angular/common/http";
    import {Observable} from 'rxjs/Rx';
import { ToastController } from 'ionic-angular';




@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {


 	phonenum:number;
	pinnum:number=null;
	hospital:any;
	check:any;
	phnum1:any;
	pin1:any;
	hos_name:any;
	f_name:any;
	l_name:any;fir_name:any;lst_name:any;phn_num:any;
  	constructor(private toastCtrl: ToastController,public view:ViewController,public event:Events,private alertCtrl: AlertController,public navCtrl: NavController,public Http:Http) {

  	}
	 	ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
    let checking=this.event.subscribe('firstpageconfirmation',(data)=>{
    	// this.check=checking;
    	console.log(data.phnum);
    	console.log(data.pin);
    	console.log(data);
    	this.phnum1=data.phnum;
    	this.pin1=data.pin;
    	this.hos_name=data.hospital;
    	this.l_name=data.lastname;
    	this.f_name=data.firstname;
    	console.log(this.hos_name);
    })
  }
	login1() {
     
			 // if(this.phonenum==9003457577 && this.pin==1233 && this.hospital){
				// let dataa={
 			// 		hos_name:this.hospital,
 			// 		fir_name:'Raj',
 			// 		lst_name:'Soloman',
 			// 		phn_num:this.phonenum
 			// 	} 			
       
 			// 	this.navCtrl.push(ChatPage,{
 			// 		'fromlogin':dataa
 			// 		});
 			// }
 			// if(this.phonenum==this.phnum1 && this.pin==this.pin1 && this.hospital==this.hos_name){
 			// 	// let dataa=this.hospital;
 			// 	// console.log(dataa);
 			// 	// let fname=this.f_name;
 			// 	// let lname=this.l_name;
 			// 	let dataa={
 			// 		hos_name:this.hospital,
 			// 		fir_name:this.f_name,
 			// 		lst_name:this.l_name,
 			// 		phn_num:this.phonenum
 			// 	}
 			// 	this.navCtrl.push(ChatPage,{
 			// 		'titlee':dataa

 			// 		});

 			 if(this.phonenum && this.pinnum && this.hospital){
           console.log(this.phonenum);
           console.log(this.pinnum);
           let data={
             phoneNumber:this.phonenum,
             pinNumber:this.pinnum,
             HospitalName:this.hospital

           };
            
       

           let headers=new Headers();
           headers.append('Content-Type','application/json');
this.Http.post('http://192.168.1.3:8081/logindata',(data),{headers:headers})
.subscribe(data =>{
console.log(data);
let dataJSon=JSON.parse(data["_body"]);
console.log(dataJSon);
if(dataJSon=="null"){
       let toast = this.toastCtrl.create({
    message: 'Enter valid details ',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();           
}

// console.log(dataJSon.pin);

else if(dataJSon && this.pinnum==dataJSon.pin && this.phonenum==dataJSon.phnum){

  this.pinnum=null;
    let dataa={
           hos_name:this.hospital,
             fir_name:dataJSon.firstname,
           lst_name:dataJSon.lastname,
           phn_num:this.phonenum
         };  

this.navCtrl.push(ChatPage,{
  'fromlogin':dataa
});

}
// else if(dataJSon=="null"){
//     let toast = this.toastCtrl.create({
//     message: 'Enter valid details ',
//     duration: 3000,
//     position: 'bottom'
//   });

//   toast.onDidDismiss(() => {
//     console.log('Dismissed toast');
//   });

//   toast.present();            


            

// }

// else if(dataJSon && this.phonenum!=dataJSon.phnum){
//    let toast = this.toastCtrl.create({
//     message: 'Unauthorised User ',
//     duration: 3000,
//     position: 'bottom'
//   });

//   toast.onDidDismiss(() => {
//     console.log('Dismissed toast');
//   });

//   toast.present();   


// }
else if(dataJSon && this.phonenum==dataJSon.phnum && this.pinnum!=dataJSon.pin){
   let toast = this.toastCtrl.create({
    message: 'Invalid Password ',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();            


}
else {
 let toast = this.toastCtrl.create({
    message: 'Unauthorised User ',
    duration: 3000,
    position: 'bottom'
  });

  toast.onDidDismiss(() => {
    console.log('Dismissed toast');
  });

  toast.present();            


}

});




//               let headers = new Headers();
//                headers.append('Content-Type', 'application/json');
//                this.Http.post('http://192.168.1.6:8081/logindata', (data),{headers:  headers})
//   // .map(res => res.json())
// .subscribe(data => {
//                   console.log(data);
//               });

           // this.http.post('http://192.168.1.10:8081/logindata',(data),{headers:headers}) 
           //    .subscribe(data => {
           //                    console.log(data);
           //              });    
         
  //        

       }
 			
 	}
	
	signup(){
				this.navCtrl.push(SignupPage);
	}

 

}
