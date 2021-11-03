import {NextPage} from "next"
import style from "../../styles/Memo.module.css"
import Button from "@material-ui/core/Button"
import Link from "next/link"
import {useState} from 'react'

//多分、MemoはComponentsに切り分けて、[id].js, new.jsで使えばいい気がする。
const NewMemo: NextPage = () => {
    const [memo, setMemo] = useState<string>("")

    const handleClickSubmit = () => {
        //DBにmemoを保存
    }

    const handleClickSavePermanent = () => {
        //永久に保持されるようにbackendにお問い合わせ
    }

    return (
        <>
            <textarea
                className={style.memo}
                value={memo}
                onChange={(event) => setMemo(event.target.value)}
            />
            <Button onClick={handleClickSubmit}>保存する</Button>
            <Button>永久保持</Button>
            <Link href="/"><Button>＜メモ一覧</Button></Link>
        </>
    )
}

export default NewMemo