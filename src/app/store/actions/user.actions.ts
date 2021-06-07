import { createAction, props } from '@ngrx/store';

export const SignIn = createAction('[User status]  SignIn', props<{payload: { mail: string, password: string}}>());
export const SignInSuccessfully = createAction('[User status]  SignIn Successfully', props<{ payload: { isLogged: boolean, user: any} }>());
export const SignUp = createAction('[User status]  SignUp', props<{ payload: { email: string, password: string, username: string} }>());
export const SignUpSuccessfully = createAction('[User status]  SignUp Successfully');
export const UpdateUser = createAction('[User status]  Update user', props<{ payload: {username: string} }>());
export const UpdateUserSuccessfully = createAction('[User status]  Update user Successfully', props<{ payload: {user: any} }>());
export const SignOut = createAction('[User status]  SignOut', props<{ payload: boolean }>());
export const SignOutSuccessfully = createAction('[User status]  SignOut Successfully', props<{ payload: boolean }>());
