import { FormlyExtension, FormlyFieldConfig } from '@ngx-formly/core';
import { TranslateService } from '@ngx-translate/core';

const EMPTY_KEY = 'APP.EMPTY';
export class TranslateExtension implements FormlyExtension {
  constructor(private translate: TranslateService) {}
  prePopulate(field: FormlyFieldConfig) {
    const props = field.props || {};
    if (props['_translated']) return;
    props['_translated'] = true;
    field.expressions = {
      ...(field.expressions || {}),
      'props.label': this.translate.stream(props.label ?? EMPTY_KEY),
      'props.placeholder': this.translate.stream(
        props.placeholder ?? EMPTY_KEY
      ),
    };
  }
}

export function registerTranslateExtension(translate: TranslateService) {
  return {
    validationMessages: [
      {
        name: 'required',
        message() {
          return translate.stream('FORM.VALIDATION.REQUIRED');
        },
      },
    ],
    extensions: [
      {
        name: 'translate',
        extension: new TranslateExtension(translate),
      },
    ],
  };
}
