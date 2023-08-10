import { routerNavigationAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ApiErrors } from 'src/app/shared/models/api-errors';
import { ArticleActions } from './action';
import { Article } from 'src/app/shared/models/article';

export interface ArticleState {
  isSubmitting: boolean;
  validationErrors: ApiErrors | null;
  isSuccess: boolean;
  isLoading: boolean;
  error: string | null;
  data: Article | null;
}

const initialState: ArticleState = {
  isSubmitting: false,
  validationErrors: null,
  isSuccess: false,
  isLoading: false,
  error: null,
  data: null,
};

export const articleFeature = createFeature({
  name: 'createArticle',
  reducer: createReducer(
    initialState,
    on(ArticleActions.createArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(ArticleActions.createArticleSuccess, (state) => ({
      ...state,
      isSubmitting: false,
      isSuccess: true,
    })),
    on(ArticleActions.createArticleFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialState),
    on(ArticleActions.getArticle, (state) => ({ ...state, isLoading: true })),
    on(ArticleActions.getArticleSuccess, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.article,
    })),
    on(ArticleActions.getArticleFailure, (state) => ({
      ...state,
      isLoading: false,
    })),
    on(routerNavigationAction, () => initialState),
    on(ArticleActions.getArticleFromStore, (state, action) => ({
      ...state,
      isLoading: false,
      data: action.article,
    }))
  ),
});

export const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
  selectIsSubmitting,
  selectValidationErrors,
  selectIsSuccess,
  selectIsLoading,
  selectError,
  selectData: selectArticleData,
} = articleFeature;
