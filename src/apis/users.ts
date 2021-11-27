import axios from 'axios'
import {createUserUrl} from "../urls";

export const createUser = (email: string, password: string) => {
    return axios.post(createUserUrl,
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
