import React from 'react'

interface Props {
    title: string
    date: string
    leadSentence: string
}

export const MemoCard: React.FC<Props> = (props) => {
    return (
        <>
            <div>
                <h3>{props.title}</h3>
                <span>{props.date}</span>
                <span>{props.leadSentence}</span>
            </div>
        </>
    )
}
