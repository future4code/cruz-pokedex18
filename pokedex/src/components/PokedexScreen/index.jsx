import * as S from './styles'

const PokedexScreen = ({pokemon}) => {
  let hasPokemon
  if (!pokemon.name) hasPokemon = 'Select a pokemon'
  const capitalize = name => {
    const a = name[0].toUpperCase()
    const b = name.slice(1).toLowerCase()
    return a + b
  }

  const getImg = pokemon => {
    const adress = '/typeicons/'
  }
  return (
    <S.Container>
      <S.InfoContainer>
        {/* <S.ID>{pokemon.name && `#${String(pokemon.id).padStart(3, '0')}`}</S.ID> */}
        <S.Name>
          {pokemon.name ? capitalize(pokemon.name) : 'Select a pokemon'}
        </S.Name>
        {pokemon.name && (
          <S.Types>
            {pokemon.types.map(i => (
              <S.Type key={i.type.name} src={`/typeicons/${i.type.name}.png`} />
            ))}
          </S.Types>
        )}
      </S.InfoContainer>
      <S.Image
        src={
          pokemon.name &&
          pokemon.sprites.versions['generation-v']['black-white'].animated
            .front_default
        }
      />
      <S.Button>Battle</S.Button>
    </S.Container>
  )
}

export default PokedexScreen
