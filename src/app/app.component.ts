import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';
import { TranslateService } from 'ng2-translate'

import { HomePage } from '../pages/home/home';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  rootPage: any;

  constructor(
    private platform: Platform,
    private translateService: TranslateService
  ) {
    this.rootPage = HomePage;
    //Language
    this.translateService.setDefaultLang('en');
    this.translateService.use('en');

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}