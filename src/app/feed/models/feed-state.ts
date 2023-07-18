import { FeedResponse } from './feed-response';

export interface FeedState {
  isLoading: boolean;
  error: boolean;
  data: FeedResponse | null;
}
