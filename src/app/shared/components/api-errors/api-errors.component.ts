import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiErrors } from '../../models/api-errors';

@Component({
  selector: 'medium-errors',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './api-errors.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ApiErrorsComponent {
  @Input() apiErrors: ApiErrors = {};

  errorMessages: string[] = [];

  ngOnInit(): void {
    this.errorMessages = Object.keys(this.apiErrors).map((name: string) => {
      const messages = this.apiErrors[name].join(' ');
      return `${name} ${messages}`;
    });
  }
}
