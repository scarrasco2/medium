import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { ApiErrors } from 'src/app/shared/models/api-errors';
import { Article } from 'src/app/shared/models/article';
import { ArticleRequest } from 'src/app/shared/models/article-request';

export const ArticleActions = createActionGroup({
  source: 'article',
  events: {
    'Create article': props<{ request: ArticleRequest }>(),
    'Create article success': props<{ article: Article }>(),
    'Create article failure': props<{ errors: ApiErrors }>(),

    'Get article': props<{ slug: string }>(),
    'Get article success': props<{ article: Article }>(),
    'Get article failure': emptyProps(),
    'Get article from store': props<{ article: Article }>(),

    'Delete article': props<{ slug: string }>(),
    'Delete article success': emptyProps(),
    'Delete article failure': emptyProps(),
  },
});
