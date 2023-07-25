import { createActionGroup, props } from '@ngrx/store';
import { ApiErrors } from 'src/app/shared/models/api-errors';
import { Article } from 'src/app/shared/models/article';
import { ArticleRequest } from 'src/app/shared/models/article-request';

export const createArticleActions = createActionGroup({
  source: 'create article',
  events: {
    'Create article': props<{ request: ArticleRequest }>(),
    'Create article success': props<{ article: Article }>(),
    'Create article failure': props<{ errors: ApiErrors }>(),
  },
});
