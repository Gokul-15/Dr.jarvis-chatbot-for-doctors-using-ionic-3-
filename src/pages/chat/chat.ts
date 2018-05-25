 import { Component, ElementRef, ViewChild/*, NgZone */} from '@angular/core';
  import { IonicPage, NavController, NavParams ,ViewController,Events} from 'ionic-angular';
  // import  {Platform} from 'ionic-angular';
  // import {SpeechRecognition,SpeechRecognitionListeningOptionsAndroid} from '@ionic-native/speech-recognition'
  import {ModalController} from 'ionic-angular';
  import {ModalPage} from '../modal/modal';
  import { Content } from 'ionic-angular';
  import { PopoverController } from 'ionic-angular';
  import {PopovermenuPage} from '../popovermenu/popovermenu';
  // import { MessageServiceProvider } from '../../providers/message-service/message-service';
  import {Http,Headers} from '@angular/http';
  import { HttpClient } from "@angular/common/http";
  // import {Observable} from 'rxjs/Observable';
  import { NgZone } from '@angular/core';
  import {TextToSpeech} from '@ionic-native/text-to-speech';
  // import { ImageViewerController} from 'ionic-img-viewer';
  import {Observable} from 'rxjs/Rx';
import { ToastController } from 'ionic-angular';



@IonicPage()
@Component({
  selector: 'page-chat',
  templateUrl: 'chat.html',
})
export class ChatPage {
  @ViewChild (Content) content: Content;
  // @ViewChild('focus') Focus ;
  public togglevalue:any;
  public base64Image: string;
  public doctorname:string;
  public Department:string;
  public ward:any;
  public Number:any; 
  public parameter1:string;
  public docname:string;
  // public toggle:any;
  public voice:any;
  a:any[]=[];   editorMsg:string;
  speechResponse:any;
  public image:string;
  public hospitalheader:any;
  firstname:any;
  lastname:any;
  phonenumber:any;
  constructor(private toastCtrl: ToastController,public navparams:NavParams,public event:Events,private ts:TextToSpeech,public modal:ModalController,public navCtrl:NavController,public popoverCtrl:PopoverController,private http:Http,private zone:NgZone){

              }
   // presentmage(myImage) {
   //    const imageViewer = this.imageViewerCtrl.create(myImage);
   //    imageViewer.present();
    //  }

  // SpeechReply=true;
    ionViewDidLoad() {
        console.log('ionViewDidLoad chatpage');
        let head=this.navparams.get('fromlogin');
        console.log(head);

        this.hospitalheader=head.hos_name;
        this.firstname=head.fir_name;
        this.phonenumber=head.phn_num;
        console.log(this.firstname);
        this.lastname=head.lst_name;
        this.speechResponse=true;

        this.event.subscribe('FromVoiceEdit',(voicesend)=>{
              this.voice=voicesend;
              console.log(this.voice);
             });
      
        this.event.subscribe('FromProfileEdit',(param1,param2,param3,param4)=>{
            this.parameter1=param1;
            console.log(this.parameter1);
            this.Department=param2;
            this.ward=param3;
            console.log(this.parameter1);
            this.base64Image=param4;
            console.log(this.ward); 
              });
   
        this.parameter1=this.firstname +" "+ this.lastname ;
        console.log(this.parameter1);
        this.Department="Cardiology";
        this.ward="ICU-3";
        this.Number=this.phonenumber;
        this.base64Image="assets/imgs/doctor.png";

    }


  ionViewWillEnter() {

     }


    presentPopover(event){
      
      let popover=this.popoverCtrl.create(PopovermenuPage,{toggleoption:this.voice,name:this.parameter1,department:this.Department,ward:this.ward,image:this.base64Image});
      console.log(popover);
     
      popover.present({
      ev:event
      })
      popover.onDidDismiss(data=>{
      console.log(data);
      if(data.image!=null)
                            {
                               this.image=data;
                               this.a.push({data:this.image,sR:'S'});
                               this.a.push({data:"document saved",sR:'R'});
                              }

          })
    }

  change() {
      // get elemeNTS
       this.content.scrollToBottom();
       var element   = document.getElementById('messageInputBox');
       var textarea  = element.getElementsByTagName('textarea')[0];
       textarea.style.minHeight  = '0';
       textarea.style.height     = '0';
          // limit size to 96 pixels (6 lines of text)
       var scroll_height = textarea.scrollHeight;
       if(scroll_height > 60)
               scroll_height = 60;
      // apply new style
       element.style.height      = scroll_height + "px";
       textarea.style.minHeight  = scroll_height + "px";
       textarea.style.height     = scroll_height + "px";
   
  }

  if(editorMsg="") {
             this.content.scrollToBottom();
      }


  sendText(query_text) {
      console.log("s",query_text);
      this.a.push({data:query_text,sR:'S'});//sen
      this.content.scrollToBottom();
      var self = this;                                      

      if(query_text.toString().toLowerCase().includes('details') || query_text.toString().toLowerCase().includes('detail') ){
                this.http.get("http://192.168.1.3:8081/").map(res=>res.json()).subscribe(data =>{
                console.log("success");                                                                                            
                console.log(data);
                   var status="These are the top results \n";
                   let key:any;
                for(var i=0;i<data.length;i++){
                     for( key in  (data[i])){
                           let dupkey=key;
                           console.log(typeof(key));
                           var t=data[i][key];
                           var agenum=t;
                           console.log(agenum);
                           var s=t.toString().toLowerCase();
                           console.log(s);
                           console.log(typeof(s));
                    
                           if(query_text.toString().toLowerCase().indexOf(s)!=-1){
                                  console.log(s);
                                  if(key=="name"){
                                      status=status +"\n"+"Dep:"+data[i].dept+"\n"+"Name :"+data[i].name+"\n "+"Age :"+data[i].age+"\n "+"Sex :"+data[i].sex+"\n"+"PatientId :"+data[i].id+"\n"+"AdmittedDate :"+data[i].admitedDate+"\n"+"Occupation :"+data[i].occupation+"\n"+"Problem :"+data[i].Problem;
                                   
                                     }
                                      else if((key=="dept" && dupkey=="floor" )||(key=="dept") ){
                                                console.log(s);
                                                status=status +"\n" +"Name :"+data[i].name+"\n "+"Age :"+data[i].age+"\n "+"Sex :"+data[i].sex+"\n"+"PatientId :"+data[i].id+"\n"+"AdmittedDate :"+data[i].admitedDate+"\n"+"Occupation :"+data[i].occupation+"\n"+"Problem :"+data[i].Problem+"\n";
                                       }

                                         else if(key=="floor" ){
                                                status=status +"\n"+"Name :"+data[i].name+"\n "+"Age :"+data[i].age+"\n "+"Sex :"+data[i].sex+"\n"+"PatientId :"+data[i].id+"\n"+"AdmittedDate :"+data[i].admitedDate+"\n"+"Occupation :"+data[i].occupation+"\n"+"Problem :"+data[i].Problem;
                                             }
                                                 else if(key=="age" && query_text.toString().toLowerCase().indexOf('with') ){
                                                           console.log("FDSF");
                                                           s=parseInt(s);
                                                           console.log(typeof(s));
                                                           console.log((agenum));
                                                           if(agenum==s){
                                                                 status=status +"\n"+"Name :"+data[i].name+"\n "+"Age :"+data[i].age+"\n "+"Sex :"+data[i].sex+"\n"+"PatientId :"+data[i].id+"\n"+"AdmittedDate :"+data[i].admitedDate+"\n"+"Occupation :"+data[i].occupation+"\n"+"Problem :"+data[i].Problem;
                                                            }

                                                 }
                        
                                                    else if(query_text.toString().toLowerCase().indexOf('above')!=-1 && query_text.toString().toLowerCase().indexOf('age')){
                                                              let duplicateage=parseInt(s);
                                                              console.log(duplicateage);
                                                              let find=data.find((dat) =>
                                                                           {
                                                                             console.log(dat);
                                                                             let ageverify=dat.age;
                                                                             console.log(ageverify);
                                                                             if(ageverify > duplicateage){
                                                                                 status=status +"\n"+"Name :"+dat.name+"\n "+"Age :"+dat.age+"\n "+"Sex :"+dat.sex+"\n"+"PatientId :"+dat.id+"\n"+"AdmittedDate :"+dat.admitedDate+"\n"+"Occupation :"+dat.occupation+"\n"+"Problem :"+dat.Problem+"\n";
                                                                          console.log(status);
                                                                         }});
                                                    }

                                                     else if(key=="sex" ){
                                                             status=status +"\n"+"Name :"+data[i].name+"\n "+"Age :"+data[i].age+"\n "+"Sex :"+data[i].sex+"\n"+"PatientId :"+data[i].id+"\n"+"AdmittedDate :"+data[i].admitedDate+"\n"+"Occupation :"+data[i].occupation+"\n"+"Problem :"+data[i].Problem;
                                                     }
                        }
                }
                     
       }
         self.a.push({data:status,sR:'R'}); //rec
         if(self.speechResponse==true)
                                         self.ts.speak(status);


    },error=>{
          console.log(error);
         // self.a.push({data:"No valid creditials about that..please enter valid data's",sR:'R'}); //rec
 });
    this.editorMsg="";
  }
  // 
      else if (query_text.toString().toLowerCase().includes("reports") || query_text.toString().toLowerCase().includes("report")){
                this.http.get("http://192.168.1.3:8081/patientrecord").map(res=>res.json()).subscribe(data =>{
                console.log("success");                                                                                            
                console.log(data);
                let key1:any;
                let status="These are the top results......"+"\n";

                for(var i=0;i<data.length;i++){
                  for(key1 in data[i]){
                    var dupkey=key1;
                    console.log(key1);
                    var result=data[i][key1];
                    console.log(result);
                    var   resultdup=result.toString().toLowerCase();
                    console.log(resultdup);
                    var resultbynumber=data[i][key1];
                    if(query_text.toString().toLowerCase().indexOf(resultdup)!=-1){
                          console.log("YEsssssss");
                          console.log(key1);

                          if(key1=="name"){
                                  status=status+"\n"+"Diabetic "+data[i].diabetic+"\n "+"Hypertensive "+data[i].Hypertensive+"\n "+"BloodGroup "+data[i].BloodGroup+"\n"+"PulseRate "+data[i].PulseRate+"\n"+"BloodPressureRate "+data[i].BloodPressureRate+"\n"+"RespiratoryRate "+data[i].RespiratoryRate+"\n"+" glucose "+data[i].glucose+"\n"+"weight "+data[i].weight+"\n"+"height "+data[i].height+"\n"
                                  +"bmi "+data[i].bmi+"\n"+"PainingOrSwollen "+data[i].PainingOrSwollen+"\n"+"condition "+data[i].condition+"\n";                                     // console.log(details);
                          }

                            else if(key1=="BloodGroup" ){
                                   status=status+"\n"+"Diabetic "+data[i].diabetic+"\n "+"Hypertensive "+data[i].Hypertensive+"\n "+"BloodGroup "+data[i].BloodGroup+"\n"+"PulseRate "+data[i].PulseRate+"\n"+"BloodPressureRate "+data[i].BloodPressureRate+"\n"+"RespiratoryRate "+data[i].RespiratoryRate+"\n"+" glucose "+data[i].glucose+"\n"+"weight "+data[i].weight+"\n"+"height "+data[i].height+"\n"
                                   +"bmi "+data[i].bmi+"\n"+"PainingOrSwollen "+data[i].PainingOrSwollen+"\n"+"condition "+data[i].condition+"\n"; 
                            }
                             else if(key1=="condition"){
                                   status=status+"\n"+" Diabetic  "+data[i].diabetic+"\n "+("Hypertensive ").bold()+data[i].Hypertensive+"\n "+"BloodGroup ".bold()+data[i].BloodGroup+"\n"+"PulseRate ".bold()+data[i].PulseRate+"\n"+"BloodPressureRate ".bold()+data[i].BloodPressureRate+"\n"+"RespiratoryRate ".bold()+data[i].RespiratoryRate+"\n"+" glucose ".bold()+data[i].glucose+"\n"+"weight ".bold()+data[i].weight+"\n"+"height ".bold()+data[i].height+"\n"
                                   +"bmi ".bold()+data[i].bmi+"\n"+"PainingOrSwollen ".bold()+data[i].PainingOrSwollen+"\n"+"condition ".bold()+data[i].condition+"\n"; 
                             }

                    }

                }
              }      
              self.a.push({data:status,sR:'R'}); //rec
               if(self.speechResponse==true)
                                         self.ts.speak(status);


      },error=>{
                console.log(error);
    });
      this.editorMsg="";
  }

     else if (query_text.toString().toLowerCase().includes("update") || query_text.toString().toLowerCase().includes("updates")){
               let headers = new Headers();
               headers.append('Content-Type', 'application/json');
               let body = { 
                     message:query_text
                  };
  // console.log(body);
              this.http.post('http://192.168.1.3:8081/update', JSON.stringify(body),{headers:headers})
  // .map(res => res.json())
              .subscribe(data => {
                              console.log(data);
                              if(data.status==200){
                                            var e="Success,Data updated successfully";
                                             this.a.push({data:e,sR:'R'}); //rec
                                             if(self.speechResponse==true)
                                         self.ts.speak(e);

                                 }
                                  else {
                                        var w="Something went wrong";
                                        this.a.push({data:w,sR:'R'});
                                        if(self.speechResponse==true)
                                         self.ts.speak(w);

                                   }
  });

}
  else{
        try {
              window['ApiAIPlugin'].requestText(
              {
                  query: query_text

    },
              function (response) {

                    self.zone.run(() => { 
                    self.a.push({data:response.result.fulfillment.speech,sR:'R'}); //rec
                    if(self.speechResponse==true)
                          (self.ts.speak((response.result.fulfillment.speech)));
                          self.content.scrollToBottom();

                     });

              },
              function (error) {
                  alert(error);
              });
       
          } catch (e) {
          alert(e);
                  }
      } 
       this.editorMsg="";
       var element   = document.getElementById('messageInputBox');
       element.style.minHeight  = '0';
       element.style.height     = '0';
   
  }
      
   sendVoice() {
       const myModal=this.modal.create(ModalPage);
       var self = this;
       var voicepush=this.voice;

       window['ApiAIPlugin'].setListeningStartCallback(function () {
          myModal.present();
          console.log("listening started");
      });

       window['ApiAIPlugin'].setListeningFinishCallback(function () {
          console.log("listening stopped");
          myModal.dismiss();
      });

    window['ApiAIPlugin'].requestVoice(
          {},
             function (response) {
                       self.zone.run(() => { 
                        if(voicepush==true){
                                self.a.push({data:response.result.resolvedQuery,sR:'S'}); //sen
                                self.a.push({data:response.result.fulfillment.speech,sR:'R'});//rec
                                    if(self.speechResponse==true)
                                         self.ts.speak(response.result.fulfillment.speech);
                           }
                            else 
                               self.editorMsg = response.result.resolvedQuery;
                         });
                         },
              function (error) {
              // alert(error);
              console.log(error);
          }); 
    }

  logout(){
      this.navCtrl.popToRoot();

    }
}
