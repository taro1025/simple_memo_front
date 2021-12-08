import {NextPage} from 'next'
import {MemoCard} from '../components/MemoCard'
import Link from "next/link"
import style from "../styles/pages/Index.module.css"
import {useState, useEffect} from "react"
import {Layout} from '../components/layout'
import {logout} from '../apis/auth'
import {essentialMemos} from "../apis/memos";

interface MemoInterface {
    ID: number;
    UserID: number;
    text: string;
    CreatedAt: string;
    UpdatedAt: string;
    DeletedAt: string;
    Text: string;
    Discording: boolean;
    Permanent: boolean;
}

interface IndexMemosInterface {
    currentMemos: MemoInterface[]; //今日書いたメモ+永久化してるメモ
    discordingMemos: MemoInterface[];
}

const Index: NextPage = () => {

    // going to fetch data
    // {
    //    currentMemos: {
    //         memo: {
    //          title: 'fdlfd'
    //          text: 'fdjflds'
    //          }    //     }
    //     pastMemos: {
    //         memo: {
    //          title: 'fdlfd'
    //          text: 'fdjflds'
    //         }    //     }
    // }

    const [memoIndex, setMemoIndex] = useState<IndexMemosInterface>()
    const [isCurrentMemoIndex, switchMemoIndex] = useState<boolean>(true)

    const handleSwitch = () => {
        switchMemoIndex(!isCurrentMemoIndex)
    }

    useEffect(() => {
        essentialMemos().then((res) => {
            console.log(JSON.stringify(res, null, 4))
            setMemoIndex(res.data)
        })
    }, [])

    return (
        <>
            <Layout>
                <div className={style.head}>
                    <button onClick={logout}>ログアウト</button>
                    <h2 className={style.h2} onClick={handleSwitch}>{isCurrentMemoIndex ? 'メモ一覧' : '過去のメモ一覧'}</h2>
                    <Link href="/memos/new"><span className={style.newMemo}>＋新規作成</span></Link>
                </div>
                {
                    isCurrentMemoIndex ?
                        memoIndex && memoIndex.currentMemos.map((memo: MemoInterface) => (
                            <>
                                <Link href={`/memos/${memo.ID}`}>
                                    <a><MemoCard
                                        title="title 今日の反省"
                                        date={memo.Text}
                                        leadSentence="read 今日は..."
                                    /></a>
                                </Link>
                                {console.log(memo.Text)}
                            </>
                        ))
                        :
                        memoIndex && memoIndex.discordingMemos.map((memo: MemoInterface) => (
                            <>
                                <Link href={`/memos/${memo.ID}`}>
                                    <a><MemoCard
                                        title="title 今日の反省"
                                        date={memo.Text}
                                        leadSentence="read 今日は..."
                                    /></a>
                                </Link>
                                {console.log(memo.Text)}
                            </>
                        ))
                }
            </Layout>
        </>
    )
}

export default Index
