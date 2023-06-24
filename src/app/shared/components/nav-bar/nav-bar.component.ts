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
  menu$ = this.navBarService.getMenu();
  languages: Language[] = LANGUAGES;
  selectedLanguage: Language = { name: 'English', code: 'EN' };

  languageSelected(event: DropdownChangeEvent): void {
    const selectedLanguage = (event.value as Language).code.toLowerCase();
    this.translate.use(selectedLanguage);
  }
}
