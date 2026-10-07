import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

//   1.: Főoldal, listázás ( / )
// Listázd ki a szócikkeket táblázatosan, ABC sorrendben.
// Két oszlop kell:
// a szócikk címe - ez legyen link, amely a szócikkre mutat
// a látogatások száma
// Ha a látogatások száma meghaladja a 1000-et, akkor a sor legyen félkövér!

// A táblázat alatt helyezz el két linket, amely a két aloldalra mutat.


@Get()
  @Render('index')
  getArticles() {
    return {
      title: 'Articles',
      articles: this.appService.getArticles().sort((a, b) => a.title.localeCompare(b.title)),
    }
  }
}
