import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from 'ionic-native';

import { HomePage } from '../pages/home/home';

@Component({
  template: '<ion-nav [root]="rootPage"></ion-nav>'
})
export class MyApp {

  rootPage: any;

  constructor(
    private platform: Platform
  ) {
    this.rootPage = HomePage;

    platform.ready().then(() => {
      StatusBar.styleDefault();
    });
  }
}