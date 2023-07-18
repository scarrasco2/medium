import {
  ChangeDetectionStrategy,
  Component,
  Input,
  SimpleChanges,
} from '@angular/core';
import { feedActions } from './store/actions';
import { combineLatest } from 'rxjs';
import { environment } from 'src/environments/environment.development';
import { selectError, selectFeedData, selectIsLoading } from './store/reducers';
import { Store } from '@ngrx/store';
import { ActivatedRoute, Params, Router } from '@angular/router';
import queryString from 'query-string';
import { Message } from 'primeng/api';
interface PageEvent {
  first: number;
  rows: number;
  page: number;
  pageCount: number;
}

@Component({
  selector: 'medium-feed',
  templateUrl: './feed.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FeedComponent {
  @Input() apiUrl: string = '';
  messages: Message[] = [
    { severity: 'success', summary: 'Success', detail: 'Message Content' },
  ];
  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    feed: this.store.select(selectFeedData),
  });
  rows = environment.limit;
  first: number = 0;
  baseUrl = this.router.url.split('?')[0];
  currentPage: number = 0;

  constructor(
    private store: Store,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.store.dispatch(feedActions.enterFeed());
    this.route.queryParams.subscribe((params: Params) => {
      this.currentPage = Number(params['page'] || '1');
      this.fetchFeed();
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    const isApiUrlChanged =
      !changes['apiUrl'].firstChange &&
      changes['apiUrl'].currentValue !== changes['apiUrl'].previousValue;

    if (isApiUrlChanged) {
      this.fetchFeed();
    }
  }

  fetchFeed(): void {
    const parsedUrl = queryString.parseUrl(this.apiUrl);
    const stringifiedParams = queryString.stringify({
      limit: this.rows,
      offset: this.first,
      ...parsedUrl.query,
    });
    const apiUrlWithParams = `${parsedUrl.url}?${stringifiedParams}`;
    this.store.dispatch(feedActions.enterFeed());
    this.store.dispatch(feedActions.getFeed({ url: apiUrlWithParams }));
  }

  onPageChange(event: PageEvent) {
    this.first = event.first;
    this.rows = event.rows;
    this.fetchFeed();
  }
}
