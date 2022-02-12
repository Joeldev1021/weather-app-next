/* eslint-disable @next/next/no-page-custom-font */
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
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@300;400;700&family=Raleway:wght@300;400;700&display=swap" rel="stylesheet"/>
        </Head>
        {children}
    </div>
  )
}

export default Layout