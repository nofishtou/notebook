import { createSelector, createFeatureSelector } from '@ngrx/store';

import { AppState } from '../models/app-state.model';
import { UserState } from '../reducers/user.reducer';


const featureKey = 'user';

export const selectAuth = createFeatureSelector<AppState, UserState>(featureKey);

export const getAuthStatus = createSelector(selectAuth, (state: UserState): boolean => {
  return state.isLogged;
});

export const getUser = createSelector(selectAuth, (state: UserState): object => {
  return state.user;
});
