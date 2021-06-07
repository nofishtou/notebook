import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { getNotice, getNotices } from 'src/app/store/selectors/notices.selector';
import { Notice } from '../models/notice.model';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {
  noticesSubscription$;
  notices;
  notice;

  constructor(private store: Store) { }

  getNotice(id) {
    this.noticesSubscription$ = this.store.select(getNotice, id).subscribe((notice: Notice) => this.notice = {...notice});
    this.noticesSubscription$.unsubscribe();

    return this.notice;
  }

  getNotices() {
    this.noticesSubscription$ = this.store.select(getNotices).subscribe((notices) => this.notices = [...notices]);
    this.noticesSubscription$.unsubscribe();

    return this.notices;
  }

  deleteNotice() {

  }
}
