import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedModule } from 'src/app/feed/feed.module';
import { HeroComponent } from '../hero/hero.component';
import { FeedMenuComponent } from '../feed-menu/feed-menu.component';

@Component({
  selector: 'medium-global-feed',
  standalone: true,
  imports: [CommonModule, FeedModule, HeroComponent, FeedMenuComponent],
  template: ` <medium-hero></medium-hero>
    <medium-feed-menu></medium-feed-menu>
    <medium-feed [apiUrl]="apiUrl"></medium-feed>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class GlobalFeedComponent {
  apiUrl = '/articles';
}
