import { Injectable } from '@angular/core';
import { AppConfig } from '../models/app-config';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class AppConfigService {
  config: AppConfig = {
    theme: 'viva-dark',
    dark: false,
    inputStyle: 'outlined',
    ripple: true,
  };

  private configUpdate = new Subject<AppConfig>();

  configUpdate$ = this.configUpdate.asObservable();

  private configActive = new BehaviorSubject<boolean>(false);

  configActive$ = this.configActive.asObservable();

  updateConfig(config: AppConfig) {
    this.config = config;
    this.configUpdate.next(config);
  }

  getConfig() {
    return this.config;
  }

  toggleConfig() {
    this.configUpdate
      ? this.configActive.next(true)
      : this.configActive.next(false);
  }
}
