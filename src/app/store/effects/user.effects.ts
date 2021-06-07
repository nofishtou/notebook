import { Injectable } from '@angular/core';
import { Actions, createEffect, Effect, ofType } from '@ngrx/effects';
import { EMPTY, from, of } from 'rxjs';
import { map, mergeMap, catchError, tap, exhaustMap, filter } from 'rxjs/operators';
import { UserService } from 'src/app/shared/services/user.service';
import { SignIn, SignInSuccessfully, SignUp, SignUpSuccessfully } from '../actions/user.actions';

@Injectable()
export class UserEffects {
  signIn$ = createEffect(() => this.actions$.pipe(
    ofType(SignIn),
    exhaustMap((actions: any) => this.user.SignIn(actions.payload.mail, actions.payload.password)
      .pipe(
        map(user => {
          const { uid, email } = user.user;
          return SignInSuccessfully({ payload: { isLogged: true, user:{uid, email } } });
        }),
        catchError(() => EMPTY)
      ))
    ),
  )

  signUp$ = createEffect(() => this.actions$.pipe(
    ofType(SignUp),
    mergeMap((actions: any) => this.user.SignUp(actions.payload.mail, actions.payload.password)
      .pipe(
        map(() => {
          console.log("s")
          return SignUpSuccessfully();
        }),
        catchError(() => EMPTY)
      ))
    ),
  )

  // updateUser$ = createEffect(() => this.actions$.pipe(
  //   ofType(SignIn),
  //   exhaustMap((actions: any) => this.user.SignUp(actions.payload.mail, actions.payload.password)
  //     .pipe(
  //       map(user => {
  //         console.log(user, "s");
  //         const { uid, email } = user.user;
  //         SignInSuccessfully({ payload: { isLogged: true, user:{uid, email } } });
  //         return updateUser()
  //       }),
  //       catchError(() => EMPTY)
  //     ))
  //   ),
  // );

  constructor(
    private actions$: Actions,
    private user: UserService
  ) {}
}
