import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { ImageModule } from 'primeng/image';
@Component({
  selector: 'medium-hero',
  standalone: true,
  imports: [CommonModule, TranslateModule, ButtonModule, ImageModule],
  template: `
    <div class="flex flex-column align-items-center text-center">
      <h1>{{ 'HERO.TITLE' | translate }}</h1>
      <p-image
        src="assets/svg/angular.svg"
        [alt]="'HERO.ANGULAR | translate'"
        width="150"
      ></p-image>
      <h3>
        {{ 'HERO.SUBTITLE' | translate }}
      </h3>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeroComponent {}
