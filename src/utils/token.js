const tokenKey = 'token'

export const setToken = token => sessionStorage.setItem(tokenKey, token)

export const getToken = () => sessionStorage.getItem(tokenKey)

export const deleteToken = () => sessionStorage.removeItem(tokenKey)
