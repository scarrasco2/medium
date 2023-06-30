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
import { combineLatest } from 'rxjs';

@Component({
  selector: 'medium-logout',
  template: `
    <ng-container *ngIf="data$ | async as data">
      <div class="flex flex-column align-items-center">
        <ng-container *ngIf="data.user; else notification">
          <h2 class="text-primary text-4xl">{{ 'AUTH.LOGOUT' | translate }}</h2>
          <p-progressSpinner></p-progressSpinner>
        </ng-container>
        <ng-template #notification>
          <p-messages
            [value]="data.message"
            [enableService]="false"
            [closable]="false"
          ></p-messages>
        </ng-template>
      </div>
    </ng-container>
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LogoutComponent implements OnInit {
  authService = inject(AuthService);
  store = inject(Store);
  data$ = combineLatest({
    user: this.store.select(selectCurrentUser),
    message: this.authService.getLogoutMessage(),
  });

  ngOnInit(): void {
    this.store.dispatch(authActions.logoutTrigger());
  }
}
