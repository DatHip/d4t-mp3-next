import { type typeInitialCurrentInfo } from '@/store/slice/currentInfo'
import { type typeInitialQueue } from '@/store/slice/queue'
import { type TThemes } from '@/store/slice/theme'
import { type typeInitialUser } from '@/store/slice/user'

export interface RootState {
  user: typeInitialUser
  theme: TThemes
  queue: typeInitialQueue
  currentInfo: typeInitialCurrentInfo
}
