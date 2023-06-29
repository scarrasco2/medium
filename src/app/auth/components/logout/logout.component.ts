import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { selectCurrentUser } from '../../store/reducers';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'medium-logout',
  template: `
    <div class="flex flex-column align-items-center">
      <ng-container *ngIf="user$ | async; else message">
        <h2 class="text-primary text-4xl">{{ 'AUTH.LOGOUT' | translate }}</h2>
        <p-progressSpinner></p-progressSpinner>
      </ng-container>
      <ng-template #message>
        <p-messages
          [value]="(message$ | async) ?? []"
          [enableService]="false"
          [closable]="false"
        ></p-messages>
      </ng-template>
    </div>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent implements OnInit {
  authService = inject(AuthService);
  store = inject(Store);
  user$ = this.store.select(selectCurrentUser);
  message$ = this.authService.getMessage();

  ngOnInit(): void {
    this.store.dispatch(authActions.logoutTrigger());
  }
}
