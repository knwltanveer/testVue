import * as http from './Http'

const OAUTH = 'oauth'

export const _login = data => http.post(`${OAUTH}/admin-login`, data)