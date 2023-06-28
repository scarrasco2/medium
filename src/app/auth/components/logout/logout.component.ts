import {
  ChangeDetectionStrategy,
  Component,
  OnInit,
  inject,
} from '@angular/core';
import { Store } from '@ngrx/store';
import { authActions } from '../../store/actions';
import { Message } from 'primeng/api';
import { selectCurrentUser } from '../../store/reducers';

@Component({
  selector: 'medium-logout',
  template: `
    <div class="flex flex-column align-items-center">
      <ng-container>
        <h2 class="text-primary text-4xl">{{ 'AUTH.LOGOUT' | translate }}</h2>
        <p-progressSpinner></p-progressSpinner>
      </ng-container>
      <ng-template #message>
        <p-messages
          [(value)]="messages"
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
  store = inject(Store);
  messages: Message[] = [
    {
      severity: 'success',
      summary: 'AUTH.SUCCESS',
      detail: 'AUTH.LOGOUT.MESSAGE',
    },
  ];
  ngOnInit(): void {
    this.store.dispatch(authActions.logout());
  }
}
