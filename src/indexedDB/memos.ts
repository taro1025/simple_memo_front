import Dexie from 'dexie'

export interface MemoRecord {
    id: string
    title: string
    text: string
    permanent: boolean
    discording: boolean
    updated_at: string
    created_at: string
}

//DB作成。railsでいうsimple_memo_development。DB名
const database = new Dexie('simple_memo')
//table作成
database.version(1).stores({ memos: "++id, title, text, updated_at, created_at"})
const memos: Dexie.Table<MemoRecord, string> = database.table('memos')

export const putMemo = async (id: string, text: string, permanent: boolean): Promise<void> => {
    const now = new Date().toISOString()
    const memo: MemoRecord | undefined  = await memos.get(id)
    //レコードが既に存在する場合、新規作成の場合わけ
    if (memo) {
        await memos.update(id, {
            title: "new memo",
            text: text,
            permanent: permanent,
            discording: true,
            updated_at: now,
        })
    } else {
        await memos.put({
            id: id,
            title: "new memo",
            text: text,
            permanent: permanent,
            discording: true,
            updated_at: now,
            created_at: now
        })
    }
}