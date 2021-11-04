import Head from 'next/head'
import {NextPage} from "next";

export const Layout: NextPage = ({children}) => {
    return (
        <>
            <Head>
                <title>simple page</title>
            </Head>
            <main>{children}</main>
        </>
    )
}