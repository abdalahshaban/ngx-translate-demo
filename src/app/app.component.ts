import { Component } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  user = {
    "name": "Abdullah Shaaban",
    "username": "Abdalah",
    "email": "abdalahshaban129@gmail.com",
    "address": {
      "street": "Kulas Light",
      "suite": "Apt. 556",
      "city": "cairo",
      "zipcode": "92998-3874",
    },
    "phone": "01126246811",
    "website": "hildegard.org",
    "company": {
      "name": "ISEC",
      "catchPhrase": "MEAN Stack Developer",
    }
  }
  textDir: any
  constructor(private translate: TranslateService) {

    translate.addLangs(['en', 'ar'])
    translate.setDefaultLang('en');
    const browserLang = translate.getBrowserLang()
    translate.use(browserLang.match(/en|ar/) ? browserLang : 'en')

    translate.onLangChange.subscribe((event: LangChangeEvent) => {
      if (event.lang == 'ar') {
        this.textDir = 'rtl'
      } else {
        this.textDir = 'ltr'
      }
    })
  }

  switchLanguage(language: string) {
    this.translate.use(language)
  }

}


