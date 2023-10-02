export const setLocalCookie = (key: string, value: string) => {
  if (typeof document !== 'undefined') {
    document.cookie = `${key}=${value}`
  }
}

export const getLocalCookie = (key: string) => {
  if (typeof document !== 'undefined') {
    const cookies = document.cookie.split(';')
    const cookie = cookies.find((cookie) => cookie.includes(key))
    if (cookie) {
      return cookie.split('=')[1]
    }
  }
}

export const setServerCookie = async (key: string, value: string) => {
  const { cookies } = await import('next/headers')
  const cookiesStore = cookies()

  cookiesStore.set(key, value)
}

export const getServerCookie = async (key: string) => {
  const { cookies } = await import('next/headers')
  const cookiesStore = cookies()

  return cookiesStore.get(key)?.value
}
