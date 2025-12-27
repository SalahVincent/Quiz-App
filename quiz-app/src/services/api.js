import ky from "ky";

const BASE_URL = 'https://the-trivia-api.com/v2'
const api = ky.create({prefixUrl: BASE_URL})

export default api