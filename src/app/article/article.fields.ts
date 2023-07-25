import { FormlyFieldConfig } from '@ngx-formly/core';

export const ARTICLE_TITLE: FormlyFieldConfig = {
  key: 'title',
  type: 'input',
  props: {
    placeholder: 'ARTICLE.TITLE',
    required: true,
  },
};
export const ARTICLE_ABOUT: FormlyFieldConfig = {
  key: 'about',
  type: 'input',
  props: {
    placeholder: 'ARTICLE.ABOUT',
    required: true,
  },
};
export const ARTICLE_CONTENT: FormlyFieldConfig = {
  key: 'content',
  type: 'textarea',
  props: {
    placeholder: 'ARTICLE.CONTENT',
    required: true,
  },
};
export const ARTICLE_TAGS: FormlyFieldConfig = {
  key: 'tags',
  type: 'input',
  props: {
    placeholder: 'ARTICLE.TAGS',
  },
};
