import { Injectable } from '@angular/core';
import { Store } from '@ngrx/store';
import { Notice } from 'src/app/notices/models/notice.model';
import { AddNotice } from 'src/app/store/actions/notices.actions';

@Injectable({
  providedIn: 'root'
})
export class CreateNoticeService {

  constructor(private store: Store) { }

  createNotice (formValues) {
    const { title, description } = formValues;
    const notice: Notice = {
      id: this.generateId(),
      date: new Date().toDateString(),
      title,
      description
    }

    this.store.dispatch(AddNotice({notice}));
  }

  generateId() {
    return Math.floor(Math.random() * Date.now());
  }
}
