import { inject } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { catchError, map, of, switchMap, withLatestFrom } from 'rxjs';
import { FeedService } from '../services/feed.service';

import { feedActions } from './actions';
import { FeedResponse } from '../models/feed-response';
import { Store } from '@ngrx/store';
import { selectFeedData } from './reducers';

export const getFeedEffect = createEffect(
  (
    actions$ = inject(Actions),
    feedService = inject(FeedService),
    store = inject(Store)
  ) => {
    return actions$.pipe(
      ofType(feedActions.getFeed),
      withLatestFrom(store.select(selectFeedData)),
      switchMap(([{ url }, feed]) => {
        if (!feed) {
          return feedService.getFeed(url).pipe(
            map((feed: FeedResponse) => {
              return feedActions.getFeedSuccess({ feed });
            }),
            catchError(() => {
              return of(feedActions.getFeedFailure());
            })
          );
        }
        return of(feedActions.getFeedFromStore());
      })
    );
  },
  { functional: true }
);
