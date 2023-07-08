import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SettingsRoutingModule } from './settings-routing.module';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { ButtonModule } from 'primeng/button';
import { MessagesModule } from 'primeng/messages';
import { SettingsComponent } from './components/settings.component';
import { settingsFeature } from './store/reducers';
import { StoreModule } from '@ngrx/store';

@NgModule({
  declarations: [SettingsComponent],
  imports: [
    CommonModule,
    SettingsRoutingModule,
    CardModule,
    TranslateModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyPrimeNGModule,
    ButtonModule,
    MessagesModule,
    StoreModule.forFeature(settingsFeature),
  ],
})
export class SettingsModule {}
