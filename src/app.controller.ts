import { Controller, Get, Render } from '@nestjs/common';
import { AppService } from './app.service.js';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

@Get()
  @Render('index')
  getArticles() {
    return {
      title: 'Articles',
      articles: this.appService.getArticles().sort((a, b) => a.title.localeCompare(b.title)),
    }
  }

@Get('minview')
  @Render('minview')
  getMinView() {
    return {
      title: 'MinView',
    }
  }
}