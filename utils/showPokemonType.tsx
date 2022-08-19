const showPokemonType = (param: any) => {
  return <div className={`px-4 py-2 rounded-full capitalize bg-${param}`}><p>{param}</p></div>
}

export default showPokemonType
