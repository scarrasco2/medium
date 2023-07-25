import { routerNavigationAction } from '@ngrx/router-store';
import { createFeature, createReducer, on } from '@ngrx/store';
import { ApiErrors } from 'src/app/shared/models/api-errors';
import { createArticleActions } from './action';

export interface CreateArticleState {
  isSubmitting: boolean;
  validationErrors: ApiErrors | null;
  isSuccess: boolean;
}

const initialState: CreateArticleState = {
  isSubmitting: false,
  validationErrors: null,
  isSuccess: false,
};

export const articleFeature = createFeature({
  name: 'createArticle',
  reducer: createReducer(
    initialState,
    on(createArticleActions.createArticle, (state) => ({
      ...state,
      isSubmitting: true,
    })),
    on(createArticleActions.createArticleSuccess, (state) => ({
      ...state,
      isSubmitting: false,
      isSuccess: true,
    })),
    on(createArticleActions.createArticleFailure, (state, action) => ({
      ...state,
      isSubmitting: false,
      validationErrors: action.errors,
    })),
    on(routerNavigationAction, () => initialState)
  ),
});

export const {
  name: createArticleFeatureKey,
  reducer: createArticleReducer,
  selectIsSubmitting,
  selectValidationErrors,
  selectIsSuccess,
} = articleFeature;
