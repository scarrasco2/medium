import { FormlyFieldConfig } from '@ngx-formly/core';
import { AUTH_EMAIL, AUTH_PASSWORD } from '../../auth.fields';

export const LOGIN_FIELDS: FormlyFieldConfig[] = [AUTH_EMAIL, AUTH_PASSWORD];
