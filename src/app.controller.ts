import { Controller, Get, Post, Query, Render } from '@nestjs/common';
import { AppService } from './app.service.js';
import { createArticleViewDto } from './createarticleview.js';
import { ArticleView } from './szocikk.js';

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

  @Post("newData")
  @Render("newData")
  newData(@Body()body: ArticleViewDto){

    if(!body.title || body.title.length ===0){
      return{
        error: "túl rövid a cím"
      }
    }

    const newArticle : ArticleView={
      title: body.title,
      url:body.url,
      views:parseInt(body.views)
    }
    this.articles.push(newArticle)

    return{
      success:true
    }
  }
