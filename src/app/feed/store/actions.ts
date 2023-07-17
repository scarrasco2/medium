import { createActionGroup, emptyProps, props } from '@ngrx/store';
import { FeedResponse } from '../models/feed-response';

export const feedActions = createActionGroup({
  source: 'feed',
  events: {
    'Get feed': props<{ url: string }>(),
    'Get feed success': props<{ feed: FeedResponse }>(),
    'Get feed failure': emptyProps(),
    'Enter feed': emptyProps(),
  },
});
