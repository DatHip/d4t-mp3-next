/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import dayjs from 'dayjs'
import relativeTime from 'dayjs/plugin/relativeTime'

dayjs.extend(relativeTime)

const timeLine = (time: number) => {
  const postTime = dayjs.unix(time)
  const now = dayjs()
  const diffInSeconds = now.diff(postTime, 'second')
  let timeText = ''
  if (diffInSeconds < 60) {
    timeText = 'vừa xong'
  } else if (diffInSeconds < 3600) {
    const diffInMinutes = Math.floor(diffInSeconds / 60)
    timeText = `${diffInMinutes} ` + 'phút trước'
  } else if (diffInSeconds < 86400) {
    const diffInHours = Math.floor(diffInSeconds / 3600)
    timeText = `${diffInHours} ` + 'tiếng trước'
  } else if (diffInSeconds < 604800) {
    const diffInDays = Math.floor(diffInSeconds / 86400)
    timeText = `${diffInDays} ` + 'ngày trước'
  } else {
    timeText = postTime.format('DD/MM/YYYY')
  }
  return `${timeText}`
}

export default timeLine
