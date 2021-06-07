import { createAction, props } from '@ngrx/store';
import { Notice } from 'src/app/notices/models/notice.model';

export const FetchNotices = createAction('[Notices]  Fetch Notices', props<{ fetchNotices: Notice[] }>());
export const AddNotice = createAction('[Notices]  Add Notice', props<{ notice: Notice }>());
export const DeleteNotice = createAction('[Notices]  Delete Notice', props<{ id: number }>());
