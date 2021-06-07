import { createSelector, createFeatureSelector } from '@ngrx/store';
import { Notice } from 'src/app/notices/models/notice.model';

import { AppState } from '../models/app-state.model';
import { NoticesState } from '../reducers/notices.reducer';


const featureKey = 'notices';

export const selectNotices = createFeatureSelector<AppState, NoticesState>(featureKey);

export const getNotices = createSelector(selectNotices, (state: NoticesState): Notice[] => {
  return state.notices;
});

export const getNotice = createSelector(selectNotices, (state: NoticesState, noticeId: number): Notice => {
  console.log(state.notices.find((notice) => {
    console.log(notice, notice.id === noticeId)
    return notice.id === noticeId
  }), noticeId)
  return state.notices.find((notice) => notice.id === noticeId);
});
