import { HttpErrorResponse } from '@angular/common/http';
import { inject } from '@angular/core';
import { Router } from '@angular/router';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, map, catchError, of, tap, withLatestFrom } from 'rxjs';
import { ArticleService } from '../services/article.service';
import { ArticleActions } from './action';
import { Article } from 'src/app/shared/models/article';
import { Store } from '@ngrx/store';
import { selectFeedData } from 'src/app/feed/store/reducers';

export const createArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    createArticleService = inject(ArticleService)
  ) => {
    return actions$.pipe(
      ofType(ArticleActions.createArticle),
      switchMap(({ request }) => {
        return createArticleService.createArticle(request).pipe(
          map((article: Article) => {
            return ArticleActions.createArticleSuccess({ article });
          }),
          catchError((errorResponse: HttpErrorResponse) => {
            return of(
              ArticleActions.createArticleFailure({
                errors: errorResponse.error.errors,
              })
            );
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(ArticleActions.createArticleSuccess),
      tap(({ article }) => {
        router.navigate(['/articles', article.slug]);
      })
    );
  },
  { functional: true, dispatch: false }
);

export const getArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    articleService = inject(ArticleService),
    store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(ArticleActions.getArticle),
      withLatestFrom(
        store.select(selectFeedData).pipe(map((feedData) => feedData?.articles))
      ),
      switchMap(([{ slug }, articles]) => {
        let article = articles?.find((article) => article.slug === slug);
        if (!article) {
          return articleService.getArticle(slug).pipe(
            map((article: Article) => {
              return ArticleActions.getArticleSuccess({ article });
            }),
            catchError(() => {
              return of(ArticleActions.getArticleFailure());
            })
          );
        }
        return of(ArticleActions.getArticleFromStore({ article }));
      })
    );
  },
  { functional: true }
);

export const deleteArticleEffect = createEffect(
  (actions$ = inject(Actions), articleService = inject(ArticleService)) => {
    return actions$.pipe(
      ofType(ArticleActions.deleteArticle),
      switchMap(({ slug }) => {
        return articleService.deleteArticle(slug).pipe(
          map(() => {
            return ArticleActions.deleteArticleSuccess();
          }),
          catchError(() => {
            return of(ArticleActions.deleteArticleFailure());
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterDeleteEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(ArticleActions.deleteArticleSuccess),
      tap(() => {
        router.navigateByUrl('/');
      })
    );
  },
  { functional: true, dispatch: false }
);
