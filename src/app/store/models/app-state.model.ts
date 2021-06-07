import { Notice } from "src/app/notices/models/notice.model";
import { UserState } from "../reducers/user.reducer";

export interface AppState {
  user: UserState;
  notices?: Notice[];
}
