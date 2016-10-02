import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { TranslateService, TranslatePipe } from 'ng2-translate/ng2-translate'

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  idioms: any[] = [];

  constructor(
    private navCtrl: NavController,
    private translateService: TranslateService
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

  choose(lang) {
    this.translateService.use(lang);
  }
}
