import axios from 'axios'
import { authorizationData } from './config'
import Cookies from 'js-cookie'

const { signUpURL, signInURL } = authorizationData

export const signIn = (email, password, cb) => {
  const response = axios({
    method: 'post', url: signInURL, data: {
      'email': email,
      'password': password,
    },
  })
  response.then((resp) => {
    Cookies.set('accessToken', resp.data.accessToken)
    Cookies.set('refreshToken', resp.data.refreshToken)
  }).catch((e) => {
    console.dir(e)
    cb(e)
  })
}

export const signUp = (email, password, cb) => {
  const response = axios({
    method: 'post', url: signUpURL, data: {
      'email': email,
      'password': password,
    },
  })
  response.then((resp) => {
    console.log(resp.data.accessToken)
    Cookies.set('accessToken', resp.data.accessToken)
    Cookies.set('refreshToken', resp.data.refreshToken)
  }).catch((e) => {cb(e)})
  return response
}
