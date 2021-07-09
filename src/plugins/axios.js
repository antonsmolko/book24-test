import axios from 'axios'

const HEADER_X_TOKEN = '330d207892855dbd5abd5147ea562094'
const BASE_URL = 'https://api.book24.ru'

const headers = { 'X-TOKEN': HEADER_X_TOKEN }

const instance = axios.create({
  baseURL: BASE_URL,
  headers
})

export default instance
