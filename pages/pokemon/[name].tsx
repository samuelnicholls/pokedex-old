import { useQuery } from 'react-query';
import fetchSinglePokemon from '../../pages/api/fetchSinglePokemon'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Loader from '../../components/Loader'
import showPokemonType from '../../utils/showPokemonType'
import React, { FunctionComponent } from 'react'

type PokemonType = {
  type: {
    name: string
  }
}

type Props = {
  title: string
}

export default function Pokemon() {
  
  const router = useRouter()
  const { name } = router.query

  const pokemonName = name?.toString();
  const { isLoading, error, data, isFetching } = useQuery(["fetchSinglePokemon", pokemonName], () => fetchSinglePokemon(pokemonName))

  const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`
  const backImageUrl = `https://img.pokemondb.net/sprites/home/back-normal/${pokemonName}.png`
  const pokemonData = data?.response

  console.log("poke", pokemonData)

  const pageTitle = pokemonName ? pokemonName : 'Pokemon'

  type StatRowProps = {
    title: string
    children: any
    noBorderTop?: any
  }

  type StatItemProps = {
    title?: string
    attribute: any
  }
  
  const StatRow: FunctionComponent<StatRowProps> = ({ title, children, noBorderTop }) => {
    return (
      <div className={`flex flex-col items-center pt-3 ${noBorderTop ? "" : "border-solid border-0 border-t border-white lg:border-0"}`}>
      <h2 className='text-xl mb-6'>{title}</h2>
        {children}

    </div>
    )
  }

  const StatItem: FunctionComponent<StatItemProps> = ({ title, attribute }) => {
    return (
      <>
          <p className='capitalize'>{title ? <strong>{title.replace(/-/g, ' ')}:</strong> : null} {attribute}</p>
      </>
  
    )
  }

  return (
    <Layout title={`Pokedex | ${pageTitle}`} showBackButton={true} backButtonOnClick={() => router.back()}>
      <Title text={pageTitle} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className='bg-neutral-600 rounded-md shadow-lg p-4 text-white'>
          <div className='flex justify-center flex-col items-center	'>
          <p className='text-xl'>{'#' + pokemonData.id}</p>
          <Image
            src={imageUrl}
            alt={pokemonName}
            className='p-2' 
            width='200' 
            height='200' 
          />
          <ul className='mt-8 pb-2 flex flex-wrap justify-center gap-2'>
          {pokemonData.types.map((type: PokemonType, index: number) => (
            <li key={index}>{showPokemonType(type.type.name)}</li>
          ))}
        </ul>
          </div>
          <div className='grid lg:grid-cols-3 gap-4 border-solid border-0 border-t border-white  mt-8 pt-5'>
            <StatRow title='Profile' noBorderTop={true}>
              <StatItem title='height' attribute={pokemonData.height / 10 + " m"} />
              <StatItem title='weight' attribute={pokemonData.weight / 10 + " kg"} />
            </StatRow>
            <StatRow title='Stats'>
              {pokemonData.stats.map((stat: any, index: number) => (
                <StatItem title={stat.stat.name} attribute={stat.base_stat} />
              ))}
            </StatRow>
            <StatRow title='Abilities'>
            {pokemonData.abilities.map((ability: any, index: number) => (
              <StatItem attribute={ability.ability.name} />
            ))}
            </StatRow>
          </div>

        </div>
      )}
   </Layout>
  )
}