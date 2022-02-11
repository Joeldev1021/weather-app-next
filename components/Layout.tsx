import Head from 'next/head'
import React from 'react'

interface Props {
    children: React.ReactNode
}

const Layout = ({children}:Props) => {
  return (
    <div>
        <Head>
            <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />
        </Head>
        {children}
    </div>
  )
}

export default Layout