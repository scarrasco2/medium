import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
import { FeedService } from '../../services/feed-menu.service';
@Component({
  selector: 'medium-feed-menu',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  template: `<ng-container *ngIf="items$ | async as items">
    <p-tabMenu [scrollable]="true" [model]="items"></p-tabMenu>
  </ng-container>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedMenuComponent {
  items: MenuItem[] | undefined;
  items$ = inject(FeedService).getMenu();
}
