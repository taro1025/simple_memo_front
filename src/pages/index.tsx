import {NextPage} from 'next'
import { MemoCard } from '../components/MemoCard'
import Link from "next/link"

const Index: NextPage = () => {

    // going to fetch data
    // {
    //     permanentMemos: {
    //         dfjdsfldf
    //     }
    //     currentMemos: {
    //         dfdfdfdfdf
    //     }
    //     pastMemos: {
    //         kldfjdfdsfs
    //     }
    // }
    return (
        <>
            <h2>メモ一覧 or 過去３０日間のメモ</h2>

            <Link href="/memos/1">
                <a><MemoCard
                    title="title 今日の反省"
                    date="日付 2012/12/12"
                    leadSentence="read 今日は..."
                /></a>
            </Link>

            <MemoCard
                title="title 将来の夢"
                date="日付 2012/12/12"
                leadSentence="read 俺は..."
            />
        </>
    )
}

export default Index
