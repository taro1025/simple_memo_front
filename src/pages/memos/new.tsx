import {NextPage} from "next"
import style from "../../styles/pages/Memo.module.css"
import Button from "@material-ui/core/Button"
import Link from "next/link"
import dynamic from "next/dynamic";
import {useStateWithStorage} from "../../hooks/use_state_with_storage";
import {putMemo} from '../../indexedDB/memos'
import {useState} from "react";
import {Layout} from "../../components/layout";
import {createMemo} from "../../apis/memos";

//多分、MemoはComponentsに切り分けて、[id].js, new.jsで使えばいい気がする。
const NewMemo: NextPage = () => {
    const [memo, setMemo] = useStateWithStorage("", 'text')
    const [isPermanent, setPermanent] = useState<boolean>(false)

    const handleClickSubmit = () => {
        createMemo(memo, isPermanent)
        putMemo('1', memo, isPermanent)
    }

    const handleClickSavePermanent = () => {
        //現在、Localstrageにしか保存していないのでバックエンドがわのDBにも保存させる
        setPermanent(!isPermanent)
    }

    return (
        <>
            <Layout>
                <textarea
                    className={style.memo}
                    value={memo}
                    onChange={(event) => setMemo(event.target.value)}
                />
                <Button onClick={handleClickSubmit}>保存する</Button>
                <Button onClick={handleClickSavePermanent}>
                    {isPermanent ? "保持解除" : "永久保持"}
                </Button>
                <Link href="/"><Button>＜メモ一覧</Button></Link>
            </Layout>
        </>
    )
}

//SSRだとnode.jsで処理される。がしかし、node.jsはlocalStorageを扱えないのでエラーになる。ゆえにOFFにしてる。
const DynamicNewMemo = dynamic(
    {
        loader: async () => NewMemo,
    },
    {ssr: false}
);

export default DynamicNewMemo