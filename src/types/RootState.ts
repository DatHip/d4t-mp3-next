import { type TThemes } from "@/store/slice/theme";
import { type typeInitialUser } from "@/store/slice/user";


export interface RootState {
  user: typeInitialUser;
  theme: TThemes
}
