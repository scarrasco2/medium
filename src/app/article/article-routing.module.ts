import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ArticleComponent } from './components/article/article.component';

const routes: Routes = [
  { path: 'create', component: CreateArticleComponent },
  { path: ':slug', component: ArticleComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArticleRoutingModule {}
