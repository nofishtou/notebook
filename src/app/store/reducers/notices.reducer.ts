import { Action, createReducer, on } from '@ngrx/store';
import { Notice } from 'src/app/notices/models/notice.model';
import { AddNotice, DeleteNotice, FetchNotices } from '../actions/notices.actions';

export interface NoticesState {
  notices: Notice[]
}

export const initialState: NoticesState = {
  notices: []
};

const AuthReducer = createReducer<NoticesState>(
  initialState,
  on(FetchNotices, (state: NoticesState, { fetchNotices }) => ({ ...state,  notices: fetchNotices })),
  on(AddNotice, (state: NoticesState, { notice }) => {
    return { ...state,  notices: [...state.notices, notice] }
  }),
  on(DeleteNotice, (state: NoticesState, { id }) => {
    const newNotices = [...state.notices].filter(notice => notice.id !== id);

    return { ...state,  notices: newNotices }
  }),
);

export default function reducer(state: NoticesState | undefined, action: Action) {
  return AuthReducer(state, action);
}
