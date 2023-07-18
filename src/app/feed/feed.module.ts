import { NgModule } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { PaginatorModule } from 'primeng/paginator';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { AvatarModule } from 'primeng/avatar';
import { CardModule } from 'primeng/card';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { feedFeature } from './store/reducers';
import * as feedEffects from './store/effects';
import { TranslateModule } from '@ngx-translate/core';
@NgModule({
  declarations: [FeedComponent],
  imports: [
    CommonModule,
    PaginatorModule,
    ProgressSpinnerModule,
    AvatarModule,
    ButtonModule,
    TranslateModule,
    CardModule,
    TagModule,
    RouterLink,
    MessagesModule,
    StoreModule.forFeature(feedFeature),
    EffectsModule.forFeature(feedEffects),
  ],
  exports: [FeedComponent],
})
export class FeedModule {}
