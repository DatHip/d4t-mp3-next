export type dataSliderLeftType = {
  id?: number
  to: string
  title: string
  icon: string
  active?: boolean
}

export const dataSliderLeft: dataSliderLeftType[] = [
  {
    id: 1,
    to: '/',
    title: 'Khám Phá',
    icon: 'ic-24-HomeTab'
  },
  {
    id: 2,
    to: '/chart',
    title: 'Top Chart',
    icon: 'ic-24-ChartTab'
  },
  // {
  //   id: 3,
  //   to: '/radio',
  //   title: 'Radio',
  //   icon: 'ic-24-RadioTab'
  // },
  {
    id: 4,
    to: '/newfeed/IWZ9Z08I',
    title: 'Theo Dõi',
    icon: 'ic-24-FeedTab'
  },
  {
    id: 5,
    to: '/newmusic',
    title: 'Nhạc Mới',
    icon: 'ic-24-NewReleaseTab'
  },
  {
    id: 6,
    to: '/category',
    title: 'Thể Loại',
    icon: 'ic-24-GenreTab'
  },
  {
    id: 7,
    to: '/top100',
    title: 'Top 100',
    icon: 'ic-24-Top100Tab'
  },
  {
    id: 8,
    to: '/mv/IWZ9Z08I',
    title: 'MV',
    icon: 'ic-24-MVTab'
  }
]
