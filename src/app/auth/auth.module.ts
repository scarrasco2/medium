import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { RegisterComponent } from './components/register/register.component';
import { ReactiveFormsModule } from '@angular/forms';
import { FormlyModule } from '@ngx-formly/core';
import { FormlyPrimeNGModule } from '@ngx-formly/primeng';
import { CardModule } from 'primeng/card';
import { TranslateModule } from '@ngx-translate/core';
import { ButtonModule } from 'primeng/button';
import { authFeature } from './store/reducers';
import * as authEffects from './store/effects';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { RouterLink } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { ApiErrorsComponent } from '../shared/components/api-errors/api-errors.component';
import { LogoutComponent } from './components/logout/logout.component';
import { ProgressSpinnerModule } from 'primeng/progressspinner';
import { MessagesModule } from 'primeng/messages';
@NgModule({
  declarations: [RegisterComponent, LoginComponent, LogoutComponent],
  imports: [
    CommonModule,
    RouterLink,
    AuthRoutingModule,
    ReactiveFormsModule,
    FormlyModule,
    FormlyPrimeNGModule,
    ApiErrorsComponent,
    CardModule,
    TranslateModule,
    ButtonModule,
    MessagesModule,
    ProgressSpinnerModule,
    StoreModule.forFeature(authFeature),
    EffectsModule.forFeature(authEffects),
  ],
})
export class AuthModule {}
