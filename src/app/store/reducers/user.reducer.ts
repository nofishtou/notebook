import { Action, createReducer, on } from '@ngrx/store';
import { SignUp, SignIn, SignOut, SignInSuccessfully, SignUpSuccessfully, } from '../actions/user.actions';

export interface UserState {
  isLogged: boolean,
  user? : object
}

export const initialState: UserState = {
  isLogged: false,
  user: null
};

const UserReducer = createReducer<UserState>(
  initialState,
  on(SignUp, (state: UserState ) => ({ ...state })),
  on(SignUpSuccessfully, (state: UserState) => ({ ...state})),
  on(SignIn, (state: UserState,) => ({ ...state, })),
  on(SignInSuccessfully, (state: UserState, { payload }) => ({ ...state,  isLogged: payload.isLogged, user: payload.user })),
  on(SignOut, (state: UserState, { payload }) => ({ ...state,  isLogged: payload })),
);

export default function reducer(state: UserState | undefined, action: Action) {
  return UserReducer(state, action);
}
