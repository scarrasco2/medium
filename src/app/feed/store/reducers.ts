import { createFeature, createReducer, on } from '@ngrx/store';
import { feedActions } from './actions';
import { FeedState } from '../models/feed-state';

const initialState: FeedState = {
  isLoading: false,
  error: null,
  data: null,
};

export const feedFeature = createFeature({
  name: 'feed',
  reducer: createReducer(
    initialState,
    on(feedActions.getFeed, (state) => ({ ...state, isLoading: true })),
    on(feedActions.getFeedSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.feed,
    })),
    on(feedActions.getFeedFailure, (state) => ({ ...state, isLoading: false })),
    on(feedActions.enterFeed, () => initialState)
  ),
});

export const {
  name: feedFeatureKey,
  reducer: feedReducer,
  selectIsLoading,
  selectError,
  selectData: selectFeedData,
} = feedFeature;
