const tmdbEndpoint = 'https://api-zingmp3.vercel.app/api/'
export const tmdAPI = {
  // Home page
  getHome: tmdbEndpoint + 'home',

  // Get top chart
  getTopChart: tmdbEndpoint + 'homechart',

  // Get raidio page
  getRadioPage: tmdbEndpoint + 'radio',

  // Get New feed
  getNewFeed: (id: string, page: number) =>
    `${tmdbEndpoint}newfeeds?id=${id}&page=${page}`,

  // Get new songs
  getNewSong: tmdbEndpoint + 'newreleasechart',

  // Get Thể Loại
  getHubHome: tmdbEndpoint + 'hubhome',

  // Get Hub detail
  getHubDetail: (id: string) => `${tmdbEndpoint}hubdetails/${id}`,

  // Get Top100 page
  getTop100Page: tmdbEndpoint + 'top100',

  // Get List Mv :
  getListMv: (id: string, page: number) =>
    `${tmdbEndpoint}/listmv?id=${id}&page=${page}&count=19`,

  // Category Mv
  getCategoryMV: (id: string) => `${tmdbEndpoint}categorymv/${id}`,

  // MV
  getVideoMv: (id: string) => `${tmdbEndpoint}mv/${id}`,

  // get getArtistPage:
  getArtistPage: (id: string) => `${tmdbEndpoint}artist/${id}`,

  // get getAlbumPage :
  getAlbumPage: (id: string) => `${tmdbEndpoint}playlist/${id}`,

  getSuggestedAlbum: (id: string) => `${tmdbEndpoint}suggestedplaylists/${id}`,

  //  get từ khóa hot  :
  getHotKeyApi: () => `${tmdbEndpoint}recommendkeyword`,

  // lấy key gợi ý :
  getHotSuggestionApi: (keyword: string) =>
    `${tmdbEndpoint}suggestionkeyword?keyword=${keyword}`,

  getSearchByType: (keyword: string, type: number) =>
    `${tmdbEndpoint}searchtype?keyword=${keyword}&type=${type}`,

  //  bắt đầu search :
  getSearchAllKeyApi: (keyword: string) =>
    `${tmdbEndpoint}searchall?keyword=${keyword}`,

  // Lyrics :
  getLyrics: (id: string) => `${tmdbEndpoint}songlyrics/${id}`
}
