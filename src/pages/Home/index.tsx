/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import { ActivityIndicator, View } from 'react-native';
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
import SortModal from '../../components/Home/SortModal';

function Home() {
  const [pokemons, setPokemons] = useState<Pokemon[]>([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [isFiltersModalVisible, setFiltersModalVisible] = useState(false);
  const [isSortModalVisible, setSortModalVisible] = useState(false);
  const [selectedSortMethod, setSelectedSortMethod] =
    useState('numberAscendent');
  const [takeNumber, setTakeNumber] = useState(5);
  const [total, setTotal] = useState(0);
  const [loading, setLoading] = useState(true);
  const [refreshing, setRefreshing] = useState(false);

  const navigation = useNavigation();

  function toggleFiltersModal() {
    setFiltersModalVisible(!isFiltersModalVisible);
  }

  function toggleSortModal() {
    setSortModalVisible(!isSortModalVisible);
  }

  function renderItem({ item, index }: { item: Pokemon; index: number }) {
    return (
      <Card
        key={item.id}
        onPress={() =>
          navigation.navigate(
            'PokemonDetails' as never,
            { id: item.id } as never
          )
        }
        backgroundColor={
          handlePokemonTypeColors(item.types[0].name).backgroundColor
        }
        marginBottom={index === pokemons.length - 1 && '40px'}
      >
        <CardInfoWrapper>
          <CardNumber>#{addLeftZeros(item.number)}</CardNumber>
          <CardTitle>{uppercaseFirstLetter(item.name)}</CardTitle>
          <CardTags>
            {sortTypes(item.types, item.mainType).map((type, index) => (
              <CardTag
                key={type.id}
                backgroundColor={handlePokemonTypeColors(type.name).color}
                marginLeft={index > 0 ? '5px' : '0'}
              >
                <TypeIcon
                  source={handlePokemonTypeIcons(type.name).smallImg}
                  style={{ tintColor: '#fff' }}
                />
                <CardTagText>{uppercaseFirstLetter(type.name)}</CardTagText>
              </CardTag>
            ))}
          </CardTags>
        </CardInfoWrapper>
        <PokemonImageWrapper>
          <PokemonImage source={{ uri: item.image }} />
        </PokemonImageWrapper>
      </Card>
    );
  }

  function renderFooter() {
    if (!loading) return null;

    return (
      <View
        style={{
          marginVertical: pokemons.length === 0 ? 40 : 0,
          marginBottom: pokemons.length > 0 ? 40 : 0,
        }}
      >
        <ActivityIndicator animating size="large" />
      </View>
    );
  }

  function handleRefresh() {
    setTakeNumber(5);
    setRefreshing(true);

    getPokemonsList();
  }

  async function getPokemonsList() {
    setLoading(true);

    const data = await getPokemons(selectedSortMethod, takeNumber);

    setPokemons(data.data);
    setTotal(data.total);
    setRefreshing(false);
    setLoading(false);
  }

  useEffect(() => {
    getPokemonsList();
  }, [selectedSortMethod, takeNumber]);

  return (
    <Container>
      <ListContainer
        data={pokemons}
        renderItem={renderItem}
        keyExtractor={(item: Pokemon) => item.id}
        ListHeaderComponent={
          <>
            <FiltersStack>
              <TouchableIcon onPress={toggleSortModal} marginRight="24px">
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
          </>
        }
        ListFooterComponent={renderFooter}
        refreshing={refreshing}
        onRefresh={handleRefresh}
        onEndReachedThreshold={1}
        onEndReached={() => {
          if (takeNumber <= total) setTakeNumber(takeNumber + 5);
        }}
      />
      <FiltersModal
        isModalVisible={isFiltersModalVisible}
        setModalVisible={setFiltersModalVisible}
      />
      <SortModal
        isModalVisible={isSortModalVisible}
        setModalVisible={setSortModalVisible}
        selectedSortMethod={selectedSortMethod}
        setSelectedSortMethod={setSelectedSortMethod}
      />
    </Container>
  );
}

export default Home;
