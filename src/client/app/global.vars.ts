let host = 'http://localhost:5000'

export const ENDPOINTS = {
  login: host + '/authorization/login',
  register: host + '/account/register',
  forgotpassword: host + '/account/forgotpassword',
  userinfo: host + '/account/userinfo'
}

export const VALIDATION_REGEX = {
  email: `([a-zA-Z0-9_.]{1}[a-zA-Z0-9_.]*)((@[a-zA-Z]{2}[a-zA-Z]*)[\\\.]([a-zA-Z]{2}|[a-zA-Z]{3}))`
}
