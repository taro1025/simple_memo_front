import {NextPage} from 'next'
import {MemoCard} from '../components/MemoCard'
import Link from "next/link"
import {useState} from "react"

interface MemoInterface {
    title: string;
    text: string;
    created_at: string;
    updated_at: string;
}

interface IndexMemosInterface {
    currentMemos: MemoInterface[]; //今日書いたメモ+永久化してるメモ
    pastMemos: MemoInterface[];
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

    return (
        <>
            {
                isCurrentMemoIndex ? (
                    <>
                        <h2 onClick={handleSwitch}>メモ一覧</h2>

                        <Link href="/memos/1">
                            <a><MemoCard
                                title="title 今日の反省"
                                date="日付 2012/12/12"
                                leadSentence="read 今日は..."
                            /></a>
                        </Link>
                    </>
                ) : (
                    <>
                        <h2 onClick={handleSwitch}>過去３０日間のメモ</h2>

                        <Link href="/memos/1">
                            <a> <MemoCard
                                title="title 将来の夢"
                                date="日付 2012/12/12"
                                leadSentence="read 俺は..."
                            /></a>
                        </Link>
                    </>
                )
            }
        </>
    )
}

export default Index
