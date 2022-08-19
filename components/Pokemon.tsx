import React, { FunctionComponent } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { useQuery } from 'react-query';
import fetchSinglePokemon from '../pages/api/fetchSinglePokemon'
import showPokemonType from '../utils/showPokemonType'

type Pokemon = {
  name: string
  url: string
}

type Props = {
  pokemon: Pokemon
}

const Pokemon: FunctionComponent<Props> = ({ pokemon }) => {
  const pokemonIndex = pokemon.url.split('/')[pokemon.url.split('/').length - 2];
  const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${pokemon.name}.png`

  const { isLoading, error, data, isFetching } = useQuery(["fetchSinglePokemon", pokemon.name], () => fetchSinglePokemon(pokemon.name))

  return (
    <Link href={`/pokemon/${pokemon.name}`}>
      <a className='flex flex-col items-center rounded-md shadow-lg p-4 text-white bg-neutral-600'>
        <p className='text-xl'>{'#' + pokemonIndex}</p>
        <div className='w-40 mr-2 rounded-full inline'>
          <Image
            src={imageUrl}
            alt={pokemon.name}
            className='p-2' 
            width='200' 
            height='200' 
          />
        </div>
        <div className='w-full'>
          <p className='text-center text-2xl mb-4 capitalize mt-4'>{pokemon.name}</p>
        </div>
        <ul className='mt-4 pb-2 flex flex-wrap justify-center gap-2'>
          {data?.response.types.map((type: any, index: number) => (
            <li key={index}>{showPokemonType(type.type.name)}</li>
          ))}
        </ul>
      </a>

    </Link>
  )
}

export default Pokemon