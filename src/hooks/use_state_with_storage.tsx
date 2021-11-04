import { useState } from 'react'

export const useStateWithStorage = (init: string, key: string): [string, (s: string) => void] => {
    const [value, setValue] = useState<string>(localStorage.getItem(key) || init)

    //setStateのカスタマイズ版, withStorageってこと。
    const setValueWithStorage = (nextValue: string): void => {
        setValue(nextValue)
        localStorage.setItem(key, nextValue)
    }

    return [value, setValueWithStorage]
}
