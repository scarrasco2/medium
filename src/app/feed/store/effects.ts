import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap } from 'rxjs';
import { FeedService } from '../services/feed.service';

import { feedActions } from './actions';
import { FeedResponse } from '../models/feed-response';

export const getFeedEffect = createEffect(
  (actions$ = inject(Actions), feedService = inject(FeedService)) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      switchMap(({ url }) => {
        return feedService.getFeed(url).pipe(
          map((feed: FeedResponse) => {
            return feedActions.getFeedSuccess({ feed });
          }),
          catchError(() => {
            return of(feedActions.getFeedFailure());
          })
        );
      })
    );
  },
  { functional: true }
);
