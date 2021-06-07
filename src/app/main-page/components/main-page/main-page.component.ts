import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AddNotice, DeleteNotice } from 'src/app/store/actions/notices.actions';
import { getAuthStatus } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {
  isLogged$
  isLogged

  constructor(private store: Store) { }

  ngOnInit(): void {
    this.isLogged$ = this.store.select(getAuthStatus).subscribe((value) => this.isLogged = value);
    console.log(this.isLogged);
    this.store.dispatch(AddNotice({ notice: {
      id: 1,
      title: "Tom",
      date: new Date().toString(),
      description: "SmthSmthSmthSmthSmthSmthSmth thSmthSmth  thSmthSmth v thSmthSmth  thSmthSmth  thSmthSmth  thSmthSmth  vv thSmthSmth  thSmthSmth  thSmthSmth  thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth thSmthSmth "
    } }))
    this.store.dispatch(AddNotice({ notice: {
      id: 0,
      title: "Bov",
      date: new Date().toString(),
      description: "SmthSmthSmthSmthSmthSmthSmth"
    } }))
    this.store.dispatch(AddNotice({ notice: {
      id: 2,
      title: "Shit",
      date: new Date().toString(),
      description: "SmthSmthSmth SmthSmthSmthSmth SmthSmthSmthSmthSmth"
    } }))
    this.store.dispatch(DeleteNotice({ id: 0 }))
    this.store.dispatch(AddNotice({ notice: {
      id: 3,
      title: "New shit",
      date: new Date().toString(),
      description: "Smth"
    } }))
  }

}
