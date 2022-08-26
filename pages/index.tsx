import type { NextPage } from "next";
import { useInfiniteQuery } from "react-query";
import fetchAllPokemon from "./api/fetchAllPokemon";
import Layout from "../components/Layout";
import Pokemon from "../components/Pokemon";
import Button from "../components/Button";
import Loader from "../components/Loader";
import Title from "../components/Title";
import Error from "../components/Error";

type PokemonType = {
  name: string;
  url: string;
};

const Home: NextPage = () => {
  const {
    data,
    error,
    isLoading,
    fetchNextPage,
    hasNextPage,
    isFetchingNextPage,
    status,
  } = useInfiniteQuery("fetchAllPokemon", fetchAllPokemon, {
    getNextPageParam: (lastPage) => lastPage.nextPage,
  });
  const decideButtonText = isFetchingNextPage
    ? "Loading..."
    : hasNextPage
    ? "Load More"
    : "Nothing more to load";

  return (
    <Layout title="Pokedex">
      <Title text="Pokedex" />
      <>
        {error && <Error />}
        {isLoading ? (
          <Loader />
        ) : (
          <>
            <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {data?.pages.map((result) =>
                result.response.map((pokemon: PokemonType, index: number) => (
                  <Pokemon key={index} pokemon={pokemon} />
                ))
              )}
            </ul>
            {!error && (
              <div className="mt-8 flex justify-center">
                <Button
                  title={decideButtonText}
                  onClick={() => fetchNextPage()}
                  disabled={!hasNextPage || isFetchingNextPage}
                />
              </div>
            )}
          </>
        )}
      </>
    </Layout>
  );
};

export default Home;
