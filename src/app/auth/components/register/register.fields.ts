import { FormlyFieldConfig } from '@ngx-formly/core';
import { AUTH_USERNAME, AUTH_EMAIL, AUTH_PASSWORD } from '../../auth.fields';

export const REGISTER_FIELDS: FormlyFieldConfig[] = [
  AUTH_USERNAME,
  AUTH_EMAIL,
  AUTH_PASSWORD,
];
