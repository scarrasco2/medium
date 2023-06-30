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
import { AvatarModule } from 'primeng/avatar';
import { Store } from '@ngrx/store';
import { selectCurrentUser } from 'src/app/auth/store/reducers';
import { combineLatest } from 'rxjs';
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
    AvatarModule,
  ],
  templateUrl: './nav-bar.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavBarComponent {
  translate = inject(TranslateService);
  store = inject(Store);
  navBarService = inject(NavBarService);
  configService = inject(AppConfigService);
  data$ = combineLatest({
    menu: this.navBarService.getMenu(),
    user: this.store.select(selectCurrentUser),
  });
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
