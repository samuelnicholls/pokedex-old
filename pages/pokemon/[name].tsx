import { useQuery } from 'react-query';
import fetchSinglePokemon from '../../pages/api/fetchSinglePokemon'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Loader from '../../components/Loader'
import showPokemonType from '../../utils/showPokemonType'
type PokemonType = {
  type: {
    name: string
  }
}
export default function Pokemon() {
  
  const router = useRouter()
  const { name } = router.query

  const pokemonName = name?.toString();
  const { isLoading, error, data, isFetching } = useQuery(["fetchSinglePokemon", pokemonName], () => fetchSinglePokemon(pokemonName))

  const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`
  const backImageUrl = `https://img.pokemondb.net/sprites/home/back-normal/${pokemonName}.png`
  const pokemonData = data?.response

  const pageTitle = pokemonName ? pokemonName : 'Pokemon'

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
          <div className='grid lg:grid-cols-3 gap-4 border-solid border-0 border-t border-white  mt-8 pt-8'>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl mb-6'>Profile</h2>
              <p>Height: 0.7m</p>
              <p>Weight: 69kg</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl mb-6'>Stats</h2>
              <p>HP: 44</p>
              <p>Attack: 24 </p>
              <p>Defense: 79</p>
              <p>Special Attack: 88</p>
              <p>Special Defense: 12</p>
              <p>Speed: 34</p>
            </div>
            <div className='flex flex-col items-center'>
              <h2 className='text-xl mb-6'>Abilites</h2>
              <p>Overgrown</p>
              <p>Chlorophyll</p>
            </div>

          </div>

        </div>
      )}
   </Layout>
  )
}