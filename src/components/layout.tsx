import Head from 'next/head'
import {NextPage} from "next";

export const Layout: NextPage = ({children}) => {
    return (
        <>
            <main>{children}</main>
        </>
    )
}