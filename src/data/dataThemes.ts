export interface ThemesProps {
  title: string
  items: {
    name?: string
    itemS?: string
    dataTheme?: string
    bgImg?: string
    bgPlaying?: boolean
    bgHeader: boolean
    dataStyle?: boolean
  }
}

export const THEMES = [
  {
    title: 'Dynamic',
    items: [
      {
        name: 'London',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/London-thumb.png',
        dataTheme: 'light',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/London-light1.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Sáng Tối',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-light-dark-1.jpg',
        dataTheme: 'light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Xanh Da Trời',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-blue.jpg',
        dataTheme: 'blue-light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Hồng',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-pink.jpg',
        dataTheme: 'pink-light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Nâu',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dynamic-brown.jpg',
        dataTheme: 'gray',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      }
    ]
  },
  {
    title: 'Chủ Đề',
    items: [
      {
        name: 'XONE',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/xone-thumbn.jpg',
        dataTheme: 'dark',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/xone-bg.jpg',
        bgPlaying:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1//images/theme/xone-miniplayer.jpg',
        bgHeader:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1//images/theme/xone-header.jpg',
        dataStyle: [
          '--purple-primary: #D1AB00',
          '--primary-bg: #363636',
          '--progressbar-active-bg: #d7cb1f',
          '--link-text-hover: #E5BB00',
          "--miniplayer-bg-img: url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/xone-miniplayer.jpg')",
          "--header-bg-img: url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/xone-header.jpg')"
        ]
      },
      {
        name: 'Zing Music Awards',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/zma.jpg',
        dataTheme: 'blue',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/zma.svg',
        bgPlaying:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-player/zma.png',
        bgHeader: false,
        dataStyle: [
          '--layout-bg: #37075d',
          '--primary-bg: #4B1178',
          '--queue-player-popup-bg: #5d218c',
          '--purple-primary: #ed2b91',
          '--link-text-hover: #fe63da',
          '--sidebar-popup-bg: #572f90',
          '--linear-gradient-bg: linear-gradient(to bottom, #740091, #2d1a4c)',
          "--miniplayer-bg-img: url('https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-player/zma.png')"
        ]
      },
      {
        name: 'Tháp Eiffel',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/eiffel.jpg',
        dataTheme: 'dark',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/eiffel.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: ['--layout-bg: #282828', '--primary-bg: #3d3d3d']
      }
    ]
  },
  {
    title: 'Nghệ Sĩ',
    items: [
      {
        name: 'Jack',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jack.jpg',
        dataTheme: 'brown',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/jack.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: [
          '--layout-bg: #767269',
          '--player-bg: #4C473E',
          '--primary-bg: #605C52',
          '--queue-player-popup-bg: #726c5e',
          '--purple-primary: #D08011',
          '--link-text-hover: #F59D22',
          '--main-box-shadow: #4242421a',
          '--linear-gradient-bg: linear-gradient(to bottom, #656156, #574f40)'
        ]
      },
      {
        name: 'Ji Chang Wook',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/ji-chang-wook.jpg',
        dataTheme: 'green-light',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/ji-chang-wook.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: [
          '--layout-bg: #B3D8DB',
          '--purple-primary: #1966B2',
          '--primary-bg: #D1EDF0',
          '--link-text-hover: #1F5A93',
          '--text-item-hover: #1F5A93',
          '--player-bg: #A3D5DC'
        ]
      },
      {
        name: 'Lisa',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/lisa.jpg',
        dataTheme: 'pink-light',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/lisa.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: [
          '--layout-bg: #F1DDD8',
          '--player-bg: #F4CBCA',
          '--primary-bg: #F9E6E2',
          '--purple-primary: #D14781',
          '--box-hot-item-bg: rgba(254,255,255,0.3)',
          '--box-hot-item-bg-hover: rgba(254,255,255,0.4)',
          '--link-text-hover: #CC3373',
          '--text-item-hover: #CC3373'
        ]
      },
      {
        name: 'Jennie Kim',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jennie.jpg',
        dataTheme: 'gray',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/jennie.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: [
          '--layout-bg: #BBB9C4',
          '--player-bg: #C6C4D1',
          '--primary-bg: #CAC6DD',
          '--purple-primary: #8919AE',
          '--text-item-hover: #6F1F89',
          '--text-item-hover: #2a5e6b'
        ]
      },
      {
        name: 'Jennie Kim',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/jisoo.jpg',
        dataTheme: 'light',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/jisoo.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: [
          '--purple-primary: #8D22C3',
          '--primary-bg: #FFFFFF',
          '--text-item-hover: #8D22C3',
          '--link-item-hover: #8D22C3'
        ]
      },
      {
        name: 'Rosé',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/rose.jpg',
        dataTheme: 'blue',
        bgImg:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme-background/rose.jpg',
        bgPlaying: false,
        bgHeader: false,
        dataStyle: [
          '--layout-bg: #061C4F',
          '--player-bg: #061641',
          '--primary-bg: #1A3570',
          '--purple-primary: #3560F5',
          '--link-item-hover: #8D22C3'
        ]
      }
    ]
  },
  {
    title: 'Màu Tối',
    items: [
      {
        name: 'Tối',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/dark.jpg',
        dataTheme: 'dark',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Tím',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/purple.jpg',
        dataTheme: 'purple',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Xanh Đậm',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue-light.jpg',
        dataTheme: 'blue',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Xanh Biển',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/blue.jpg',
        dataTheme: 'blue-light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Xanh Lá',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green.jpg',
        dataTheme: 'blue-light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Nâu',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/brown.jpg',
        dataTheme: 'brown',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Hồng',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink.jpg',
        dataTheme: 'pink',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Đỏ',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/red.jpg',
        dataTheme: 'red',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      }
    ]
  },
  {
    title: 'Màu Sáng',
    items: [
      {
        name: 'Sáng',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/light.jpg',
        dataTheme: 'light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Xám',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/gray.jpg',
        dataTheme: 'gray',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Xanh Nhạt',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/green-light.jpg',
        dataTheme: 'green-light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      },
      {
        name: 'Hồng Cánh Sen',
        itemS:
          'https://zmp3-static.zmdcdn.me/skins/zmp3-v6.1/images/theme/pink-light.jpg',
        dataTheme: 'pink-light',
        bgImg: false,
        bgPlaying: false,
        bgHeader: false,
        dataStyle: false
      }
    ]
  }
]
