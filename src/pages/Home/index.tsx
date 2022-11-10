import React, { useState, useEffect } from 'react';
import { useNavigation } from '@react-navigation/core';

import {
  Container,
  FiltersStack,
  TouchableIcon,
  Title,
  Subtitle,
  InputWrapper,
  Card,
  CardInfoWrapper,
  CardNumber,
  CardTitle,
  CardTags,
  CardTag,
  CardTagText,
  PokemonImageWrapper,
  PokemonImage,
  TypeIcon,
  ListContainer,
} from './styles';
import GenerationsSvg from '../../assets/icons/generations.svg';
import SortSvg from '../../assets/icons/sort.svg';
import FiltersSvg from '../../assets/icons/filters.svg';
import CustomInput from '../../components/CustomInput';
import FiltersModal from '../../components/Home/FiltersModal';
import { Pokemon } from '../../types/pokemon';
import {
  handlePokemonTypeColors,
  uppercaseFirstLetter,
} from '../../utils/strings';
import { getPokemons } from '../../services/api/pokemon';
import { addLeftZeros } from '../../utils/numbers';
import { handlePokemonTypeIcons } from '../../utils/icons';
import { sortTypes } from '../../utils/arrays';

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersModalVisible, setFiltersModalVisible] = useState(false);

  const navigation = useNavigation();

  const toggleFiltersModal = () => {
    setFiltersModalVisible(!isFiltersModalVisible);
  };

  async function getPokemonsList() {
    const data = await getPokemons();

    setPokemons(data);
  }

  useEffect(() => {
    getPokemonsList();
  }, []);

  return (
    <Container>
      <FiltersStack>
        <TouchableIcon marginRight="24px">
          <GenerationsSvg width={24} height={24} />
        </TouchableIcon>
        <TouchableIcon marginRight="24px">
          <SortSvg width={24} height={24} />
        </TouchableIcon>
        <TouchableIcon onPress={toggleFiltersModal}>
          <FiltersSvg width={24} height={24} />
        </TouchableIcon>
      </FiltersStack>
      <Title>Pokédex</Title>
      <Subtitle>
        Search for Pokémon by name or using the National Pokédex number.
      </Subtitle>
      <InputWrapper>
        <CustomInput
          placeholder="What Pokémon are you looking for?"
          value={searchQuery}
          setValue={setSearchQuery}
        />
      </InputWrapper>
      <ListContainer>
        {pokemons.map((pokemon) => (
          <Card
            key={pokemon.id}
            onPress={() =>
              navigation.navigate(
                'PokemonDetails' as never,
                { id: pokemon.id } as never
              )
            }
            backgroundColor={
              handlePokemonTypeColors(pokemon.types[0].name).backgroundColor
            }
          >
            <CardInfoWrapper>
              <CardNumber>#{addLeftZeros(pokemon.number)}</CardNumber>
              <CardTitle>{uppercaseFirstLetter(pokemon.name)}</CardTitle>
              <CardTags>
                {sortTypes(pokemon.types, pokemon.mainType).map(
                  (type, index) => (
                    <CardTag
                      key={type.id}
                      backgroundColor={handlePokemonTypeColors(type.name).color}
                      marginLeft={index > 0 ? '5px' : '0'}
                    >
                      <TypeIcon
                        source={handlePokemonTypeIcons(type.name)}
                        style={{ tintColor: '#fff' }}
                      />
                      <CardTagText>
                        {uppercaseFirstLetter(type.name)}
                      </CardTagText>
                    </CardTag>
                  )
                )}
              </CardTags>
            </CardInfoWrapper>
            <PokemonImageWrapper>
              <PokemonImage source={{ uri: pokemon.image }} />
            </PokemonImageWrapper>
          </Card>
        ))}
      </ListContainer>
      <FiltersModal
        isModalVisible={isFiltersModalVisible}
        setModalVisible={setFiltersModalVisible}
      />
    </Container>
  );
}

export default Home;
