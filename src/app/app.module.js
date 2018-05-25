var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { SpeechRecognition } from '@ionic-native/speech-recognition';
import { MyApp } from './app.component';
import { LoginPage } from '../pages/login/login';
import { SignupPage } from '../pages/signup/signup';
// import  {SecondPage} from '../pages/second/second';
import { ChatPage } from '../pages/chat/chat';
import { SMS } from '@ionic-native/sms';
import { ModalPage } from '../pages/modal/modal';
import { EditPage } from '../pages/edit/edit';
import { Camera } from '@ionic-native/camera';
import { PopovermenuPage } from '../pages/popovermenu/popovermenu';
import { HttpModule } from '@angular/http';
import 'rxjs/add/operator/map';
import { ModalsettingsPage } from '../pages/modalsettings/modalsettings';
import { TextToSpeech } from '@ionic-native/text-to-speech';
// import { PinDialog } from '@ionic-native/pin-dialog';
// import { FormsModule, ReactiveFormsModule } from '@angular/forms';
/*import {AbstractControl} from '@angular/forms';
*/
// import { IonicImageViewerModule } from 'ionic-img-viewer';
let AppModule = class AppModule {
};
AppModule = __decorate([
    NgModule({
        declarations: [
            // FormsModule,
            MyApp,
            LoginPage,
            SignupPage,
            ChatPage,
            ModalPage,
            PopovermenuPage,
            ModalsettingsPage, EditPage
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
            ModalsettingsPage, EditPage
        ],
        providers: [
            StatusBar,
            SplashScreen,
            { provide: ErrorHandler, useClass: IonicErrorHandler },
            SpeechRecognition,
            SMS, TextToSpeech, Camera,
        ]
    })
], AppModule);
export { AppModule };
//# sourceMappingURL=app.module.js.map