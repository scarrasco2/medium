import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ArticleRoutingModule } from './article-routing.module';
import { CreateArticleComponent } from './components/create-article/create-article.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { CardModule } from 'primeng/card';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { EditArticleComponent } from './components/edit-article/edit-article.component';
import { TranslateModule } from '@ngx-translate/core';
import { articleFeature } from './store/reducers';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import * as articleEffects from './store/effects';
@NgModule({
  declarations: [CreateArticleComponent, EditArticleComponent],
  imports: [
    CommonModule,
    ArticleRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyPrimeNGModule,
    CardModule,
    ButtonModule,
    MessagesModule,
    TranslateModule,
    StoreModule.forFeature(articleFeature),
    EffectsModule.forFeature(articleEffects),
  ],
})
export class ArticleModule {}
