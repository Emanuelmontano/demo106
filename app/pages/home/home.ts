import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslatePipe, TranslateService } from 'ng2-translate/ng2-translate';

@Component({
  templateUrl: 'build/pages/home/home.html',
  pipes: [ TranslatePipe ]
})
export class HomePage {

  idioms: any[] = [];

  constructor(
    private navCtrl: NavController,
    private translate: TranslateService
  ) {
    this.idioms = [
      {
        value: 'es',
        label: 'Español'
      },
      {
        value: 'en',
        label: 'Ingles'
      },
      {
        value: 'pt',
        label: 'Portugués'
      }
    ];
  }

  choose(lang){
    this.translate.use(lang);
  }
}
