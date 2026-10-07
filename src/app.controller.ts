import { Controller, Get, Query, Render } from '@nestjs/common';
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
  getMinView(@Query('minViews') view?: string) {
    const minViews = Number(view);

    const results = this.appService.getArticles().filter(
      article => article.views >= minViews
    );
    return {
      title: 'MinView',
      articles: results,
      minViews: view ?? '',
    }
  }

  @Get('newData')
  @Render('newData')
  getNewData() {
    

    return {
      title: 'New Data',
    
    }
  }

}