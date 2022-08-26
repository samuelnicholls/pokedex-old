import { useQuery } from "react-query";
import React, { FunctionComponent } from "react";
import fetchSinglePokemon from "../../pages/api/fetchSinglePokemon";
import { useRouter } from "next/router";
import Image from "next/image";
import Layout from "../../components/Layout";
import Title from "../../components/Title";
import Loader from "../../components/Loader";
import showPokemonType from "../../utils/showPokemonType";
import DataRow from "../../components/DataRow";
import DataItem from "../../components/DataItem";

type PokemonType = {
  type: {
    name: string;
  };
};

export default function Pokemon() {
  const router = useRouter();
  const { name } = router.query;
  const pokemonName = name?.toString();
  const { isLoading, data } = useQuery(
    ["fetchSinglePokemon", pokemonName],
    () => fetchSinglePokemon(pokemonName)
  );
  const imageUrl = `https://img.pokemondb.net/sprites/home/normal/${pokemonName}.png`;
  const pokemonData = data?.response;
  const pageTitle = pokemonName ? pokemonName : "Pokemon";

  return (
    <Layout
      title={`Pokedex | ${pageTitle}`}
      showBackButton={true}
      backButtonOnClick={() => router.back()}
    >
      <Title text={pageTitle} />
      {isLoading ? (
        <Loader />
      ) : (
        <div className="bg-neutral-600 rounded-md shadow-lg p-4 text-white">
          <div className="flex justify-center flex-col items-center	">
            <p className="text-xl">{"#" + pokemonData.id}</p>
            <Image
              src={imageUrl}
              alt={pokemonName}
              className="p-2"
              width="200"
              height="200"
            />
            <ul className="mt-8 pb-2 flex flex-wrap justify-center gap-2">
              {pokemonData.types.map((type: PokemonType, index: number) => (
                <li key={index}>{showPokemonType(type.type.name)}</li>
              ))}
            </ul>
          </div>
          <div className="grid lg:grid-cols-3 gap-4 border-solid border-0 border-t border-white  mt-8 pt-5">
            <DataRow title="Profile" noBorderTop={true}>
              <DataItem
                index={0}
                title="Height"
                attribute={pokemonData.height / 10 + " m"}
              />
              <DataItem
                index={1}
                title="Weight"
                attribute={pokemonData.weight / 10 + " kg"}
              />
            </DataRow>
            <DataRow title="Stats">
              {pokemonData.stats.map((stat: any, index: number) => (
                <DataItem
                  index={index}
                  title={stat.stat.name}
                  attribute={stat.base_stat}
                />
              ))}
            </DataRow>
            <DataRow title="Abilities">
              {pokemonData.abilities.map((ability: any, index: number) => (
                <DataItem index={index} attribute={ability.ability.name} />
              ))}
            </DataRow>
          </div>
        </div>
      )}
    </Layout>
  );
}
