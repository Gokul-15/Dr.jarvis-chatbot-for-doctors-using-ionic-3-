import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { LoginPage } from '../pages/login/login';
@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any =LoginPage;
    
    constructor(platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen) {
    platform.ready().then(() => {

        window['ApiAIPlugin'].init(
        {
            clientAccessToken: "c8a58176bff24edd8762f3c15ab0dbf9", // insert your client access key here
            lang: "en" // set lang tag from list of supported languages
        }, 
        function(result) { 
        /* success processing */ },
        function(error) { /* error processing */ }
    );

      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      // splashScreen.hide();
    });

  }
}

