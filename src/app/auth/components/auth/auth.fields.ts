import { FormlyFieldConfig } from '@ngx-formly/core';

export const AUTH_FIELDS: FormlyFieldConfig[] = [
  {
    key: 'email',
    type: 'input',
    className: 'm-3',
    props: {
      placeholder: 'AUTH.EMAIL',
      required: true,
    },
  },
  {
    key: 'password',
    type: 'input',
    props: {
      placeholder: 'AUTH.PASSWORD',
      required: true,
      type: 'password',
    },
  },
];
