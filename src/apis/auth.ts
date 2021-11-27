import axios from 'axios'
import { signupUserUrl, refreshUrl, loginUrl, logoutUrl } from '../urls/index'

export const login = (email: string, password: string) => {
    return axios.post(loginUrl,
        {
            email: email,
            password: password
        }, { withCredentials: true })
        .then(res => {
            console.log("成功")
            return res.data
        })
        .catch((e) => console.log("登録失敗", e))
}

export const logout = () => {
    return axios.post(logoutUrl, null,{ withCredentials: true })
        .then(res => {
            console.log("ログアウト成功")
            return res.data
        })
        .catch((e) => console.log("ログアウト失敗", e))
}

export const refreshToken = (email: string, password: string) => {
    return axios.get(refreshUrl)
        .then(res => {
            console.log("成功")
            return res.data
        })
        .catch((e) => console.log("登録失敗", e))
}
