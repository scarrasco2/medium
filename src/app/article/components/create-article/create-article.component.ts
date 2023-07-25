import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  inject,
} from '@angular/core';
import { CREATE_FIELDS } from './create-article.fields';
import { FormGroup } from '@angular/forms';
import { Store } from '@ngrx/store';
import {
  selectIsSubmitting,
  selectIsSuccess,
  selectValidationErrors,
} from '../../store/reducers';
import { combineLatest } from 'rxjs';

@Component({
  selector: 'medium-create-article',
  templateUrl: './create-article.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CreateArticleComponent implements OnDestroy {
  store = inject(Store);
  fields = CREATE_FIELDS;
  form = new FormGroup({});
  model: any;
  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    apiSuccess: this.store.select(selectIsSuccess),
    apiError: this.store.select(selectValidationErrors),
  });

  submit() {
    console.log('s');
  }

  ngOnDestroy(): void {
    this.form.reset();
  }
}
