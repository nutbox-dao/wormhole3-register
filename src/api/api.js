import { get, post } from "./axios"
import { BACKEND_API_URL } from '@/config'

/****************************************  auth  ***********************************************/
export const twitterAuth = async(needLogin) =>
  get(BACKEND_API_URL + '/auth/login', {needLogin})

export const twitterLogin = async(state) =>
  get(BACKEND_API_URL + '/users/login', {state})

export const twitterRefreshAccessToken = async (twitterId) =>
  post(BACKEND_API_URL + '/auth/refresh', {twitterId})

export const logout = async (twitterId) =>
  get(BACKEND_API_URL + '/auth/logout', {twitterId})

export const register = async (params) =>
  post(BACKEND_API_URL + '/register', params)

export const check = async (params) =>
  post(BACKEND_API_URL + '/register/check', params)

/****************************************  user  ***********************************************/
export const getUserInfo = async (username, ethAddress) =>
  get(BACKEND_API_URL + '/users/byusername', {username, ethAddress})

export const readNft = async (twitterId) =>
  post(BACKEND_API_URL + '/users/readNft', {twitterId})

export const getNftReceivedState = async (twitterId) =>
  get(BACKEND_API_URL + '/users/nftReceiveState', {twitterId})

export const getUsersTransaction = async (twitterId, pageSize, time, newTrans) =>
  get(BACKEND_API_URL + '/transaction/byTwitterId', { twitterId, pageSize, time, newTrans })

export const cacheKey = async (params) =>
  post(BACKEND_API_URL + '/register/cachePwd', params)

export const getProfile = async (twitterId) =>
  post(BACKEND_API_URL + '/users/profile', {twitterId})

export const getUserByEth = async (ethAddress) =>
  get(BACKEND_API_URL + '/users/getUserByEth', {ethAddress})

export const getUserByIds = async (twitterIds) =>
  get(BACKEND_API_URL + '/users/byTwitterIds', {twitterIds})

export const searchUsers = async (text) =>
  get(BACKEND_API_URL + '/users/searchUsers', {text})

export const generateWordcloud = async (twitterId) =>
  post(BACKEND_API_URL + '/wordcloud/generate', {twitterId})

