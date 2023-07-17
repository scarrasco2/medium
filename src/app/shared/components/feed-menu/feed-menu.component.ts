import { ChangeDetectionStrategy, Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabMenuModule } from 'primeng/tabmenu';
import { MenuItem } from 'primeng/api';
@Component({
  selector: 'medium-feed-menu',
  standalone: true,
  imports: [CommonModule, TabMenuModule],
  template: `<p-tabMenu
    [scrollable]="true"
    [model]="items"
    [activeItem]="activeItem"
  ></p-tabMenu>`,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedMenuComponent {
  items: MenuItem[] | undefined;

  activeItem: MenuItem | undefined;

  ngOnInit() {
    this.items = [
      { label: 'Global', icon: 'pi pi-globe' },
      { label: 'User', icon: 'pi pi-user' },
    ];

    this.activeItem = this.items[0];
  }
}
