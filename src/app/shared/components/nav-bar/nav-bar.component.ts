import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { MenubarModule } from 'primeng/menubar';
import { DropdownChangeEvent, DropdownModule } from 'primeng/dropdown';
import { Language } from '../../models/language';
import { LANGUAGES } from './languages';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { NavBarService } from '../../services/nav-bar.service';
import { ButtonModule } from 'primeng/button';
import { AppConfigService } from '../../services/app-config.service';
import { AppConfig } from '../../models/app-config';
@Component({
  selector: 'medium-nav-bar',
  standalone: true,
  imports: [
    CommonModule,
    MenubarModule,
    DropdownModule,
    BrowserModule,
    FormsModule,
    TranslateModule,
    ButtonModule,
  ],
  templateUrl: './nav-bar.component.html',
  styles: [
    `
      :host {
        display: block;
      }
    `,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  translate = inject(TranslateService);
  navBarService = inject(NavBarService);
  configService = inject(AppConfigService);
  config!: AppConfig;
  menu$ = this.navBarService.getMenu();
  languages: Language[] = LANGUAGES;
  selectedLanguage: Language = { name: 'English', code: 'EN' };

  onConfigButtonClick(event: Event) {
    this.configService.toggleConfig();
    event.preventDefault();
  }

  languageSelected(event: DropdownChangeEvent): void {
    const selectedLanguage = (event.value as Language).code.toLowerCase();
    this.translate.use(selectedLanguage);
  }
}
