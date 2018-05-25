var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component, ViewChild /*, NgZone */ } from '@angular/core';
import { IonicPage, NavController, NavParams, Events } from 'ionic-angular';
// import  {Platform} from 'ionic-angular';
// import {SpeechRecognition,SpeechRecognitionListeningOptionsAndroid} from '@ionic-native/speech-recognition'
import { ModalController } from 'ionic-angular';
import { ModalPage } from '../modal/modal';
import { Content } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { PopovermenuPage } from '../popovermenu/popovermenu';
// import { MessageServiceProvider } from '../../providers/message-service/message-service';
import { Http, Headers } from '@angular/http';
// import {Observable} from 'rxjs/Observable';
import { NgZone } from '@angular/core';
import { TextToSpeech } from '@ionic-native/text-to-speech';
/**
 * Generated class for the ChatPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
let ChatPage = class ChatPage {
    constructor(navparams, event, ts, modal, navCtrl, popoverCtrl, http, zone) {
        this.navparams = navparams;
        this.event = event;
        this.ts = ts;
        this.modal = modal;
        this.navCtrl = navCtrl;
        this.popoverCtrl = popoverCtrl;
        this.http = http;
        this.zone = zone;
        this.a = [];
        // this.http.get("http://192.168.1.6:8081/").map(res=>res.json()).subscribe(data =>{
        // console.log("success");                                                                                            
        // console.log(data);
        // },error=>{
        //   console.log(error);
        // });
    }
    // presentmage(myImage) {
    //    const imageViewer = this.imageViewerCtrl.create(myImage);
    //    imageViewer.present();
    //  }
    // SpeechReply=true;
    ionViewDidLoad() {
        console.log('ionViewDidLoad chatpage');
        let head = this.navparams.get('titlee');
        console.log(head);
        this.hospitalheader = head.hos_name;
        this.firstname = head.fir_name;
        this.phonenumber = head.phn_num;
        console.log(this.firstname);
        this.lastname = head.lst_name;
        this.speechResponse = true;
        this.event.subscribe('hello', (voicesend) => {
            this.voice = voicesend;
            console.log(this.voice);
        });
        this.event.subscribe('hell', (param1, param2, param3, param4) => {
            this.parameter1 = param1;
            console.log(this.parameter1);
            this.Department = param2;
            this.ward = param3;
            console.log(this.parameter1);
            this.base64Image = param4;
            console.log(this.ward);
        });
        this.parameter1 = this.firstname + " " + this.lastname;
        console.log(this.parameter1);
        this.Department = "Cardiology";
        this.ward = "ICU-3";
        this.Number = this.phonenumber;
        this.base64Image = "assets/imgs/doctor.png";
    }
    ionViewWillEnter() {
    }
    presentPopover(event) {
        let popover = this.popoverCtrl.create(PopovermenuPage, { toggleoption: this.voice, name: this.parameter1, department: this.Department, ward: this.ward, image: this.base64Image });
        console.log(popover);
        popover.present({
            ev: event
        });
        popover.onDidDismiss(data => {
            console.log(data);
            if (data.image != null) {
                this.image = data;
                this.a.push({ data: this.image, sR: 'S' });
                this.a.push({ data: "document saved", sR: 'R' });
            }
        });
    }
    change() {
        // get elemeNTS
        this.content.scrollToBottom();
        var element = document.getElementById('messageInputBox');
        var textarea = element.getElementsByTagName('textarea')[0];
        textarea.style.minHeight = '0';
        textarea.style.height = '0';
        // limit size to 96 pixels (6 lines of text)
        var scroll_height = textarea.scrollHeight;
        if (scroll_height > 60)
            scroll_height = 60;
        // apply new style
        element.style.height = scroll_height + "px";
        textarea.style.minHeight = scroll_height + "px";
        textarea.style.height = scroll_height + "px";
    }
    if(editorMsg = "") {
        this.content.scrollToBottom();
    }
    sendText(query_text) {
        console.log("s", query_text);
        this.a.push({ data: query_text, sR: 'S' }); //sen
        this.content.scrollToBottom();
        var self = this;
        if (query_text.toString().toLowerCase().includes('details') || query_text.toString().toLowerCase().includes('detail')) {
            this.http.get("http://192.168.1.7:8081/").map(res => res.json()).subscribe(data => {
                console.log("success");
                console.log(data);
                var status = "These are the top results";
                let key;
                for (var i = 0; i < data.length; i++) {
                    for (key in (data[i])) {
                        let dupkey = key;
                        console.log(typeof (key));
                        var t = data[i][key];
                        var agenum = t;
                        console.log(agenum);
                        var s = t.toString().toLowerCase();
                        console.log(s);
                        console.log(typeof (s));
                        if (query_text.toString().toLowerCase().indexOf(s) != -1) {
                            console.log(s);
                            if (key == "name") {
                                status = status + "\n" + "Dep:" + data[i].dept + "\n" + "Name :" + data[i].name + "\n " + "Age :" + data[i].age + "\n " + "Sex :" + data[i].sex + "\n" + "PatientId :" + data[i].id + "\n" + "AdmittedDate :" + data[i].admitedDate + "\n" + "Occupation :" + data[i].occupation + "\n" + "Problem :" + data[i].Problem;
                                // console.log(details);
                                //     self.a.push({data:details,sR:'R'}); //rec
                            }
                            else if ((key == "dept" && dupkey == "floor") || (key == "dept")) {
                                console.log(s);
                                status = status + "\n" + "Name :" + data[i].name + "\n " + "Age :" + data[i].age + "\n " + "Sex :" + data[i].sex + "\n" + "PatientId :" + data[i].id + "\n" + "AdmittedDate :" + data[i].admitedDate + "\n" + "Occupation :" + data[i].occupation + "\n" + "Problem :" + data[i].Problem;
                            }
                            else if (key == "floor") {
                                status = status + "\n" + "Name :" + data[i].name + "\n " + "Age :" + data[i].age + "\n " + "Sex :" + data[i].sex + "\n" + "PatientId :" + data[i].id + "\n" + "AdmittedDate :" + data[i].admitedDate + "\n" + "Occupation :" + data[i].occupation + "\n" + "Problem :" + data[i].Problem;
                            }
                            else if (key == "age" && !query_text.toString().toLowerCase().indexOf('above')) {
                                console.log("FDSF");
                                s = parseInt(s);
                                console.log(typeof (s));
                                console.log((agenum));
                                if (agenum == s) {
                                    console.log("YESSSSSSS");
                                    status = status + "\n" + "Name :" + data[i].name + "\n " + "Age :" + data[i].age + "\n " + "Sex :" + data[i].sex + "\n" + "PatientId :" + data[i].id + "\n" + "AdmittedDate :" + data[i].admitedDate + "\n" + "Occupation :" + data[i].occupation + "\n" + "Problem :" + data[i].Problem;
                                }
                            }
                            else if (query_text.toString().toLowerCase().indexOf('above') != -1 && query_text.toString().toLowerCase().indexOf('age')) {
                                console.log("gggggggggggggggggggggggggggggggg");
                                let duplicateage = parseInt(s);
                                console.log(duplicateage);
                                let find = data.find((dat) => {
                                    console.log(dat);
                                    let ageverify = dat.age;
                                    console.log(ageverify);
                                    if (ageverify > duplicateage) {
                                        status = status + "\n" + "Name :" + dat.name + "\n " + "Age :" + dat.age + "\n " + "Sex :" + dat.sex + "\n" + "PatientId :" + dat.id + "\n" + "AdmittedDate :" + dat.admitedDate + "\n" + "Occupation :" + dat.occupation + "\n" + "Problem :" + dat.Problem;
                                        console.log(status);
                                    }
                                });
                            }
                        }
                    }
                    // console.log(typeof(data[i].name),typeof(query_text));
                    // var c=data[i].name.toLowerCase();
                    // console.log(c);
                    // var bydept=data[i].dept.toLowerCase();
                    // var byage=data[i].age;
                    // let agefilter;
                    // var byfloor=data[i].floor.toLowerCase();
                    // if(query_text.toString().toLowerCase().indexOf(c)!=-1 ){
                    //        // let json=JSON.stringify(data[i]).toString().replace(/[{""}]/g, '');
                    //                     console.log("is");
                    //                     console.log("name is "+data[i].name);
                    //                     console.log("Age is:"+data[i].age);
                    //                     let details="These are the top results"+"\n"+"Name :"+data[i].name+"\n "+"Age :"+data[i].age+"\n "+"Sex :"+data[i].sex+"\n"+"PatientId :"+data[i].id+"\n"+"AdmittedDate :"+data[i].admitedDate+"\n"+"Occupation :"+data[i].occupation+"\n"+"Problem :"+data[i].Problem;
                    //                     self.a.push({data:details,sR:'R'}); //rec
                    //                     if(this.speechResponse==true)
                    //                                 this.ts.speak(details);
                    //                     break;
                    //                     }                
                    //  if(query_text.toString().toLowerCase().indexOf('age')!=-1 && query_text.toString().toLowerCase().includes('above')){
                    //   var dupage=byage;
                    //   let temp=[];
                    //  let find=data.find((i) =>
                    // {
                    //   let ageverify=i.age;
                    //   console.log(ageverify);
                    //   if(ageverify > dupage){
                    //       temp.push(i);
                    //       for( i=0;i<temp.length;i++){
                    //          agefilter="Name is "+temp[i].name+"\n"+"Age is "+temp[i].age;
                    //       }
                    //   }});
                    //                                                  self.a.push({data:agefilter,sR:'R'});
                    //  // console.log();
                    //  // self.a.push({data:JSON.stringify(temp),sR:'R'}); //rec
                    // }
                    // else{
                    //       console.log(query_text);
                    //     }
                }
                self.a.push({ data: status, sR: 'R' }); //rec
            }, error => {
                console.log(error);
                self.a.push({ data: "No valid creditials about that..please enter valid data's", sR: 'R' }); //rec
            });
            this.editorMsg = "";
        }
        else if (query_text.toString().toLowerCase().includes("reports") || query_text.toString().toLowerCase().includes("report")) {
            this.http.get("http://192.168.1.7:8081/patientrecord").map(res => res.json()).subscribe(data => {
                console.log("success");
                console.log(data);
                for (var i = 0; i < data.length; i++) {
                    console.log("was");
                    var d = data[i].name.toLowerCase();
                    if (query_text.toString().toLowerCase().indexOf(d) != -1) {
                        // let json=JSON.stringify(data[i]).toString().replace(/[{""}]/g, '');
                        // console.log("is");
                        // console.log("name is "+data[i].name);
                        // console.log("Age is:"+data[i].age);
                        let g = "These are the top results" + "\n" + "Diabetic " + data[i].diabetic + "\n " + "Hypertensive " + data[i].Hypertensive + "\n " + "BloodGroup " + data[i].BloodGroup + "\n" + "PulseRate " + data[i].PulseRate + "\n" + "BloodPressureRate " + data[i].BloodPressureRate + "\n" + "RespiratoryRate " + data[i].RespiratoryRate + "\n" + " glucose " + data[i].glucose + "\n" + "weight " + data[i].weight + "\n" + "height " + data[i].height + "\n"
                            + "bmi " + data[i].bmi + "\n" + "PainingOrSwollen " + data[i].PainingOrSwollen + "\n" + "condition " + data[i].condition;
                        console.log(g);
                        this.a.push({ data: g, sR: 'R' }); //rec
                        if (this.speechResponse == true)
                            this.ts.speak(g);
                        break;
                    }
                }
            }, error => {
                console.log(error);
            });
            this.editorMsg = "";
        }
        else if (query_text.toString().toLowerCase().includes("update") || query_text.toString().toLowerCase().includes("updates")) {
            let headers = new Headers();
            headers.append('Content-Type', 'application/json');
            let body = {
                message: query_text
            };
            // console.log(body);
            this.http.post('http://192.168.1.7:8081/update', JSON.stringify(body), { headers: headers })
                .subscribe(data => {
                console.log(data);
                if (data.status == 200) {
                    var e = "Success,Data updated successfully";
                    this.a.push({ data: e, sR: 'R' }); //rec
                }
                else {
                    var w = "Something went wrong";
                    this.a.push({ data: w, sR: 'R' });
                }
            });
        }
        else {
            try {
                window['ApiAIPlugin'].requestText({
                    query: query_text
                }, function (response) {
                    self.zone.run(() => {
                        self.a.push({ data: response.result.fulfillment.speech, sR: 'R' }); //rec
                        // if(tog==true)
                        if (self.speechResponse == true)
                            (self.ts.speak((response.result.fulfillment.speech)));
                        self.content.scrollToBottom();
                    });
                }, function (error) {
                    alert(error);
                });
            }
            catch (e) {
                alert(e);
            }
        }
        this.editorMsg = "";
        var element = document.getElementById('messageInputBox');
        element.style.minHeight = '0';
        element.style.height = '0';
    }
    sendVoice() {
        const myModal = this.modal.create(ModalPage);
        var self = this;
        var voicepush = this.voice;
        window['ApiAIPlugin'].setListeningStartCallback(function () {
            myModal.present();
            console.log("listening started");
        });
        window['ApiAIPlugin'].setListeningFinishCallback(function () {
            console.log("listening stopped");
            myModal.dismiss();
        });
        window['ApiAIPlugin'].requestVoice({}, function (response) {
            self.zone.run(() => {
                if (voicepush == true) {
                    self.a.push({ data: response.result.resolvedQuery, sR: 'S' }); //sen
                    self.a.push({ data: response.result.fulfillment.speech, sR: 'R' }); //rec
                    if (self.speechResponse == true)
                        self.ts.speak(response.result.fulfillment.speech);
                }
                else
                    self.editorMsg = response.result.resolvedQuery;
            });
        }, function (error) {
            // alert(error);
            console.log(error);
        });
    }
    openPage() {
        this.navCtrl.popToRoot();
    }
};
__decorate([
    ViewChild(Content),
    __metadata("design:type", Content)
], ChatPage.prototype, "content", void 0);
ChatPage = __decorate([
    IonicPage(),
    Component({
        selector: 'page-chat',
        templateUrl: 'chat.html',
    }),
    __metadata("design:paramtypes", [NavParams, Events, TextToSpeech, ModalController, NavController, PopoverController, Http, NgZone])
], ChatPage);
export { ChatPage };
//# sourceMappingURL=chat.js.map