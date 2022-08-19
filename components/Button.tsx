import React, { FunctionComponent } from 'react'

type Props = {
  title: string
  onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void
  disabled: boolean
}

const Button: FunctionComponent<Props> = ({ title, onClick, disabled }) => {
  return (
    <button className='bg-neutral-600 hover:bg-black text-white font-bold py-4 px-6 rounded' onClick={onClick} disabled={disabled}>
      {title}
    </button>
  )
}

export default Button