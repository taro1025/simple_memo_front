const DEFAULT_API_LOCALHOST: string = 'http://localhost:8080/v1'//'http://127.0.0.1:8080/v1'

export const createMemoUrl: string = `${DEFAULT_API_LOCALHOST}/memos/create`
export const loginUrl: string = `${DEFAULT_API_LOCALHOST}/login`
export const createUserUrl: string = `${DEFAULT_API_LOCALHOST}/users/create`
export const refreshUrl: string = `${DEFAULT_API_LOCALHOST}/refresh_token`
export const logoutUrl: string = `${DEFAULT_API_LOCALHOST}/auth/logout`
