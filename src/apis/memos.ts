import axios from 'axios'
import {createMemoUrl, essentialMemosUrl } from '../urls/index'

export const createMemo = (memo: string, isPermanent: boolean) => {
    return axios.post(createMemoUrl,
        {
            text: memo,
            permanent: isPermanent
        }, {withCredentials: true})
        .then(res => {
            console.log("成功")
            return res.data
        })
        .catch((e) => console.log("登録失敗", e))
}

export const essentialMemos = () => {
    return axios.get(essentialMemosUrl,{withCredentials: true})
        .then(res => {
            console.log("成功")
            return res.data
        })
        .catch((e) => console.log("登録失敗", e))
}
