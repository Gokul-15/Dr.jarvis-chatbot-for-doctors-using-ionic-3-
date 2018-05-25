import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import {SpeechRecognition} from '@ionic-native/speech-recognition';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import {SignupPage} from '../pages/signup/signup';
// import  {SecondPage} from '../pages/second/second';

import {ChatPage} from '../pages/chat/chat';
import { SMS } from '@ionic-native/sms';
import {ModalController} from 'ionic-angular';
import {ModalPage} from '../pages/modal/modal';
import {EditPage} from '../pages/edit/edit';
import { Camera , CameraOptions} from '@ionic-native/camera';
import { ActionSheetController } from 'ionic-angular';
import { AlertController } from 'ionic-angular';
import {PopovermenuPage} from '../pages/popovermenu/popovermenu';
import {HttpModule,Headers} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/Observable';
import {ModalsettingsPage} from '../pages/modalsettings/modalsettings';
import { NgZone } from '@angular/core';
import {TextToSpeech} from '@ionic-native/text-to-speech';
// import { PinDialog } from '@ionic-native/pin-dialog';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';


/*import {AbstractControl} from '@angular/forms';
*/
// import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
  // FormsModule,
    MyApp,
    LoginPage,
    SignupPage,
    ChatPage,
   ModalPage,
   PopovermenuPage,
   ModalsettingsPage,EditPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    LoginPage,
    SignupPage,
    ChatPage,
    ModalPage,
    PopovermenuPage,
    ModalsettingsPage,EditPage
  ],
  providers: [

    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    SpeechRecognition,
    SMS,TextToSpeech,Camera,
   
  ]
})
export class AppModule {}
