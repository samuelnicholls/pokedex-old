import type { NextPage } from "next";
import { useInfiniteQuery } from "react-query";
import fetchAllPokemon from "./api/fetchAllPokemon";
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
    isError,
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
    <div className="container mx-auto">
      <Title text="Pokedex" />
      <div className="container md:my-12 mx-auto px-4 md:px-12">
        {isError && (
          <Error text="Error loading Pokemon, please refresh and try again." />
        )}

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
            {!isError && (
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
              </div>
    </div>
  );
};

export default Home;
