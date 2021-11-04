import React from 'react'
import style from '../styles/components/MemoCard.module.css'

interface Props {
    title: string
    date: string
    leadSentence: string
}

export const MemoCard: React.FC<Props> = (props) => {
    return (
        <>
            <div className={style.cardWrapper}>
                <div className={style.card}>
                    <h3>{props.title}</h3>
                    <span className={style.readSentence}>{props.date}</span>
                    <span className={style.readSentence}>{props.leadSentence}</span>
                </div>
            </div>
        </>
    )
}
