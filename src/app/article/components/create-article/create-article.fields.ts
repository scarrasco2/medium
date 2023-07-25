import { FormlyFieldConfig } from '@ngx-formly/core';
import {
  ARTICLE_ABOUT,
  ARTICLE_CONTENT,
  ARTICLE_TAGS,
  ARTICLE_TITLE,
} from '../../article.fields';

export const CREATE_FIELDS: FormlyFieldConfig[] = [
  ARTICLE_TITLE,
  ARTICLE_ABOUT,
  ARTICLE_CONTENT,
  ARTICLE_TAGS,
];
