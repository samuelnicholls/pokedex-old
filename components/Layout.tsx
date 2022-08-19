import Head from 'next/head'
import React, { FunctionComponent, ReactNode } from 'react'

type Props = {
  title: string
  children: ReactNode
}

const Layout: FunctionComponent<Props> = ({ title, children }) => {
  return (
    <div className="bg-neutral-500">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto min-h-screen py-6 px-4 lg:py-16">
        {children}
      </main>
    </div>
  )
}

export default Layout