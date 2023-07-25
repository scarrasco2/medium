import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'medium-edit-article',
  template: `
    <p>
      edit-article works!
    </p>
  `,
  styles: [
  ],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class EditArticleComponent {

}
