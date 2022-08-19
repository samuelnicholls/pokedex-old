import { useQuery } from 'react-query';
import fetchSinglePokemon from '../../pages/api/fetchSinglePokemon'
import { useRouter } from 'next/router'
import Image from 'next/image'
import Layout from '../../components/Layout'
import Title from '../../components/Title'
import Loader from '../../components/Loader'

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
    <Layout title={`Pokedex | ${pageTitle}`}>
    <Title text={pageTitle} />
    {isLoading ? (
      <Loader />
    ) : (
      <div className='bg-neutral-600 rounded-md shadow-lg p-4'>
      <Image
        src={imageUrl}
        alt={pokemonName}
        className='p-2' 
        width='200' 
        height='200' 
      />
      <p>{pokemonName}</p>
      <p>{pokemonData.id}</p>
</div>
    )}
  </Layout>
  )
}