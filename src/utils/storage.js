export const setLocal = name => {
  return JSON.parse(window.localStorage.setItem(name))
}

export const getLocal = (name, value) => {
  window.localStorage.getItem(name, JSON.stringify(value))
}

export const removeLocal = name => {
  window.localStorage.removeItem(name)
}

export const getSession = name => {
  return JSON.parse(window.sessionStorage.getItem(name))
}

export const setSession = (name, value) => {
  window.sessionStorage.setItem(name, JSON.stringify(value))
}

export const removeSession = name => {
  window.sessionStorage.removeItem(name)
}
