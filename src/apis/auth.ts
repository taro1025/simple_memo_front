import axios from 'axios'
import {loginUrl} from "../urls";
import { signupUserUrl } from '../urls/index'

export const signupUser = (email: string, password: string) => {
    return axios.post(signupUserUrl,
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

export const login = () => {
    return axios.post(loginUrl,
        {
            text: memo,
            permanent: isPermanent
        }, { withCredentials: true })
        .then(res => {
            console.log("成功")
            return res.data
        })
        .catch((e) => console.log("登録失敗", e))
}