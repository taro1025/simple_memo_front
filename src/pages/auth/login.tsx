import {NextPage} from "next";
import TextField from '@material-ui/core/TextField';
import React, {useState} from "react"
import style from '../../styles/pages/Auth.module.css'
import Button from '@material-ui/core/Button'

interface inputValueInterface {
    email: string;
    password: string;
}

const Login: NextPage = () => {
    const [state, setState] = useState<inputValueInterface>({
        email: "",
        password: "",
    })

    const handleInputChange = (event: React.ChangeEvent<HTMLTextAreaElement | HTMLInputElement>) => {
        setState({...state, [event.target.name]: event.target.value})
    }

    const handleSubmit = () => {
        //ユーザー作成のPOSTを投げる
    }

    return (
        <>
            <div className={style.formWrapper}>
                <div className={style.fieldWrapper}>
                    <TextField
                        id="standard-search"
                        label="Email"
                        name="email"
                        value={state.email}
                        onChange={event => handleInputChange(event)}
                    />
                </div>
                <div className={style.fieldWrapper}>
                    <TextField
                        id="standard-password-input"
                        label="Password"
                        type="password"
                        autoComplete="current-password"
                        name="password"
                        value={state.password}
                        onChange={event => handleInputChange(event)}
                    />
                </div>
                <div className={style.fieldWrapper}>
                    <Button variant="contained" type="submit"
                            onClick={handleSubmit}>
                        Login
                    </Button>
                </div>
            </div>

        </>

    )
}

export default Login