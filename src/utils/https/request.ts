/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import axios from 'axios'

export async function apiGet (url: string) {
  const { data } = await axios.get(url)
  return data
}
