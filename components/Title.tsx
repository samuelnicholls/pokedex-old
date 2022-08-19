import Head from 'next/head'
import React, { FunctionComponent } from 'react'

type Props = {
  text: string
}

const Title: FunctionComponent<Props> = ({ text }) => {
  return <h1 className='font-medium text-4xl md:text-5xl text-white text-center mb-8 md:mb-16 capitalize'>{text}</h1>
}

export default Title