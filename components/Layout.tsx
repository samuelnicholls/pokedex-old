import Head from 'next/head'
import React, { FunctionComponent, ReactNode } from 'react'
import Button from '../components/Button'

type Props = {
  title: string
  children: ReactNode
  showBackButton?: boolean
  backButtonOnClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
}

const Layout: FunctionComponent<Props> = ({ title, children, showBackButton, backButtonOnClick }) => {
  return (
    <div className="bg-neutral-500">
      <Head>
        <title>{title}</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="container mx-auto min-h-screen py-6 px-4 lg:py-16">
        {showBackButton && backButtonOnClick && (
          <div className='mb-4'>
            <Button title='Back' onClick={backButtonOnClick} />
          </div>
        )}
        {children}
      </main>
    </div>
  )
}

export default Layout