import { FormlyFieldConfig } from '@ngx-formly/core';

export const AUTH_EMAIL: FormlyFieldConfig = {
  key: 'email',
  type: 'input',
  props: {
    placeholder: 'AUTH.EMAIL',
    required: true,
    type: 'email',
  },
};
export const AUTH_PASSWORD: FormlyFieldConfig = {
  key: 'password',
  type: 'input',
  props: {
    placeholder: 'AUTH.PASSWORD',
    required: true,
    type: 'password',
  },
};
export const AUTH_USERNAME: FormlyFieldConfig = {
  key: 'username',
  type: 'input',
  props: {
    placeholder: 'AUTH.USERNAME',
    required: true,
  },
};
