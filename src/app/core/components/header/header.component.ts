import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { filter } from 'rxjs/operators'
import { getUser } from 'src/app/store/selectors/user.selector';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})

export class HeaderComponent implements OnInit {
  user = null;
  isLoginPage: boolean ;
  userSubscription$;

  constructor(private router: Router,
              private store: Store) { }

  ngOnInit(): void {
    this.router.events.pipe(
      filter((event) => event instanceof NavigationEnd)
    )
      .subscribe((route: NavigationEnd) => {
        console.log(route)
        this.isLoginPage = route.url === '/auth/login';
        console.log(this.isLoginPage)
      });

      this.userSubscription$ = this.store.select(getUser).subscribe((user) => this.user = user);
  }

}
