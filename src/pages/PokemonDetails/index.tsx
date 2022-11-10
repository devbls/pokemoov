import React, { useState, useEffect } from 'react';
import { TouchableOpacity, Image } from 'react-native';
import { useNavigation, useRoute } from '@react-navigation/core';

import {
  Container,
  TopContainer,
  PokemonInfoWrapper,
  PokemonImage,
  PokemonInfo,
  PokemonNumber,
  PokemonName,
  PokemonTypes,
  PokemonTypeTag,
  PokemonTypeTagText,
  Tabs,
  TabText,
  BottomContainer,
  Description,
  CategoryTitle,
  CategoryItem,
  CategoryItemTitle,
  CategoryItemDescription,
  CompositeCategoryItemDescription,
  SmallCategoryItemDescription,
  WeaknessIcon,
  Stats,
  StatRow,
  StatName,
  StatValue,
  StatPercentageBar,
  StatMinValue,
  StatMaxValue,
  StatLabel,
  StatsDescription,
  TypeDefensesDescription,
  TypeDefenses,
  TypeDefenseItem,
  TypeIconWrapper,
  TypeDefenseValue,
} from './styles';
import ArrowLeftSvg from '../../assets/icons/arrow-left.svg';
import { handlePokemonTypeIcons } from '../../utils/icons';
import {
  abbreviatePokemonStats,
  formatPokemonStatValue,
  handlePokemonFriendshipRating,
  handlePokemonTypeColors,
  uppercaseFirstLetter,
} from '../../utils/strings';
import { Pokemon } from '../../types/pokemon';
import { getPokemonById } from '../../services/api/pokemon';
import { addLeftZeros } from '../../utils/numbers';
import { sortTypes } from '../../utils/arrays';

function PokemonDetails() {
  const [pokemon, setPokemon] = useState<Pokemon>();
  const [activeTab, setActiveTab] = useState(0);

  const { goBack } = useNavigation();

  const route = useRoute();

  const { id } = route.params as { id: string };

  const tabs = ['About', 'Stats', 'Evolution'];

  const statsSum = pokemon?.stats
    .map((stat) => stat.value)
    .reduce((a, b) => a + b, 0);

  useEffect(() => {
    async function getPokemon() {
      const data = await getPokemonById(id);

      setPokemon(data);
    }

    getPokemon();
  }, [id]);

  if (pokemon)
    return (
      <Container
        backgroundColor={
          handlePokemonTypeColors(
            pokemon.types[
              pokemon.types.map((type) => type.name).indexOf(pokemon.mainType)
            ].name
          ).backgroundColor
        }
      >
        <>
          <TopContainer>
            <TouchableOpacity onPress={goBack}>
              <ArrowLeftSvg width={24} height={24} />
            </TouchableOpacity>
            <PokemonInfoWrapper>
              <PokemonImage source={{ uri: pokemon.image }} />
              <PokemonInfo>
                <PokemonNumber>#{addLeftZeros(pokemon.number)}</PokemonNumber>
                <PokemonName>{uppercaseFirstLetter(pokemon.name)}</PokemonName>
                <PokemonTypes>
                  {sortTypes(pokemon.types, pokemon.mainType).map(
                    (type, index) => (
                      <PokemonTypeTag
                        key={type.id}
                        backgroundColor={
                          handlePokemonTypeColors(type.name).color
                        }
                        marginLeft={index > 0 ? '5px' : '0'}
                      >
                        <Image
                          source={handlePokemonTypeIcons(type.name)}
                          style={{ tintColor: '#fff' }}
                        />
                        <PokemonTypeTagText>
                          {uppercaseFirstLetter(type.name)}
                        </PokemonTypeTagText>
                      </PokemonTypeTag>
                    )
                  )}
                </PokemonTypes>
              </PokemonInfo>
            </PokemonInfoWrapper>
            <Tabs>
              {tabs.map((tab, index) => (
                <TouchableOpacity
                  key={String(index)}
                  onPress={() => setActiveTab(index)}
                >
                  <TabText
                    fontWeight={activeTab === index ? 'bold' : 'normal'}
                    opacity={activeTab === index ? 1 : 0.5}
                  >
                    {tab}
                  </TabText>
                </TouchableOpacity>
              ))}
            </Tabs>
          </TopContainer>
          <BottomContainer>
            {activeTab === 0 && (
              <>
                <Description>{pokemon.pokedexEntry}</Description>
                <CategoryTitle
                  color={handlePokemonTypeColors('grass').color}
                  marginTop="30px"
                >
                  Pokédex Data
                </CategoryTitle>
                <CategoryItem>
                  <CategoryItemTitle>Species</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.species}
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Height</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.height}m
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Weight</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.weight}kg
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Abilities</CategoryItemTitle>
                  <CompositeCategoryItemDescription direction="column">
                    {pokemon.abilities
                      .filter((ability) => !ability.hidden)
                      .map((ability, index) => (
                        <CategoryItemDescription key={String(index)}>
                          {index + 1}. {ability.name}
                        </CategoryItemDescription>
                      ))}
                    {pokemon.abilities
                      .filter((ability) => ability.hidden)
                      .map((ability, index) => (
                        <SmallCategoryItemDescription key={String(index)}>
                          {ability.name} (hidden ability)
                        </SmallCategoryItemDescription>
                      ))}
                  </CompositeCategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Weaknesses</CategoryItemTitle>
                  <CompositeCategoryItemDescription direction="row">
                    {pokemon.weaknesses
                      .filter((weakness) => Number(weakness.effectiveness) > 1)
                      .sort((a, b) => a.name.localeCompare(b.name))
                      .map((weakness, index) => (
                        <WeaknessIcon
                          key={weakness.id}
                          backgroundColor={
                            handlePokemonTypeColors(weakness.name).color
                          }
                          marginLeft={index > 0 ? '10px' : '0'}
                        >
                          <Image
                            source={handlePokemonTypeIcons(weakness.name)}
                            style={{ tintColor: '#fff' }}
                          />
                        </WeaknessIcon>
                      ))}
                  </CompositeCategoryItemDescription>
                </CategoryItem>
                <CategoryTitle
                  color={handlePokemonTypeColors('grass').color}
                  marginTop="20px"
                >
                  Training
                </CategoryTitle>
                <CategoryItem>
                  <CategoryItemTitle>EV Yield</CategoryItemTitle>
                  <CompositeCategoryItemDescription direction="column">
                    <CompositeCategoryItemDescription direction="column">
                      {pokemon.effortValues.map((effortValue, index) => (
                        <CategoryItemDescription
                          key={effortValue.id}
                          marginTop={index > 0 ? '5px' : '0'}
                        >
                          {effortValue.value} {effortValue.name}
                        </CategoryItemDescription>
                      ))}
                    </CompositeCategoryItemDescription>
                  </CompositeCategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Catch Rate</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.catchRate}%
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Base Friendship</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.baseFriendship + ' '}
                  </CategoryItemDescription>
                  <SmallCategoryItemDescription>
                    ({handlePokemonFriendshipRating(pokemon.baseFriendship)})
                  </SmallCategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Base Exp</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.baseExp}
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Growth Rate</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.growthRate}
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryTitle
                  color={handlePokemonTypeColors('grass').color}
                  marginTop="20px"
                >
                  Breeding
                </CategoryTitle>
                <CategoryItem>
                  <CategoryItemTitle>Gender</CategoryItemTitle>
                  <CategoryItemDescription color="#748FC9">
                    ♀{' '}
                    {
                      pokemon.genders[
                        pokemon.genders
                          .map((gender) => gender.name)
                          .indexOf('male')
                      ].value
                    }
                    %
                  </CategoryItemDescription>
                  <CategoryItemDescription>, </CategoryItemDescription>
                  <CategoryItemDescription color="#ED6EC7">
                    ♂{' '}
                    {
                      pokemon.genders[
                        pokemon.genders
                          .map((gender) => gender.name)
                          .indexOf('female')
                      ].value
                    }
                    %
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Egg Groups</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.eggGroups
                      .map((eggGroup) => eggGroup.name)
                      .join(', ')}
                  </CategoryItemDescription>
                </CategoryItem>
                <CategoryItem>
                  <CategoryItemTitle>Egg Steps</CategoryItemTitle>
                  <CategoryItemDescription>
                    {pokemon.eggSteps}
                  </CategoryItemDescription>
                </CategoryItem>
              </>
            )}
            {activeTab === 1 && (
              <>
                <CategoryTitle color={handlePokemonTypeColors('grass').color}>
                  Base Stats
                </CategoryTitle>
                <Stats>
                  {pokemon.stats.map((stat, index) => (
                    <StatRow
                      key={stat.id}
                      marginTop={index > 0 ? '15px' : '20px'}
                    >
                      <StatName>{abbreviatePokemonStats(stat.name)}</StatName>
                      <StatValue>{stat.value}</StatValue>
                      <StatPercentageBar />
                      <StatMinValue>{stat.min}</StatMinValue>
                      <StatMaxValue>{stat.max}</StatMaxValue>
                    </StatRow>
                  ))}
                  <StatRow marginTop="15px">
                    <StatLabel width="44px" textAlign="left">
                      Total
                    </StatLabel>
                    <StatValue fontFamily="SFProDisplayBold">
                      {statsSum}
                    </StatValue>
                    <StatPercentageBar />
                    <StatLabel width="30px" textAlign="right">
                      Min
                    </StatLabel>
                    <StatLabel width="30px" textAlign="right" marginLeft="10px">
                      Max
                    </StatLabel>
                  </StatRow>
                </Stats>
                <StatsDescription>
                  The ranges shown on the right are for a level 100 Pokémon.
                  Maximum values are based on a beneficial nature, 252 EVs, 31
                  IVs; minimum values are based on a hindering nature, 0 EVs, 0
                  IVs.
                </StatsDescription>
                <CategoryTitle
                  color={handlePokemonTypeColors('grass').color}
                  marginTop="20px"
                >
                  Type Defenses
                </CategoryTitle>
                <TypeDefensesDescription>
                  The effectiveness of each type on{' '}
                  {uppercaseFirstLetter(pokemon.name)}.
                </TypeDefensesDescription>
                <TypeDefenses>
                  {pokemon.weaknesses
                    .slice(0, Math.ceil(pokemon.weaknesses.length / 2))
                    .map((weakness, index) => (
                      <TypeDefenseItem
                        key={weakness.name}
                        marginLeft={index > 0 ? '10px' : '0'}
                      >
                        <TypeIconWrapper
                          backgroundColor={
                            handlePokemonTypeColors(weakness.name).color
                          }
                        >
                          <Image
                            source={handlePokemonTypeIcons(weakness.name)}
                            style={{ tintColor: '#fff' }}
                          />
                        </TypeIconWrapper>
                        <TypeDefenseValue>
                          {formatPokemonStatValue(weakness.effectiveness)}
                        </TypeDefenseValue>
                      </TypeDefenseItem>
                    ))}
                </TypeDefenses>
                <TypeDefenses>
                  {pokemon.weaknesses
                    .slice(Math.ceil(pokemon.weaknesses.length / 2))
                    .map((weakness, index) => (
                      <TypeDefenseItem
                        key={weakness.name}
                        marginLeft={index > 0 ? '10px' : '0'}
                      >
                        <TypeIconWrapper
                          backgroundColor={
                            handlePokemonTypeColors(weakness.name).color
                          }
                        >
                          <Image
                            source={handlePokemonTypeIcons(weakness.name)}
                            style={{ tintColor: '#fff' }}
                          />
                        </TypeIconWrapper>
                        <TypeDefenseValue>
                          {formatPokemonStatValue(weakness.effectiveness)}
                        </TypeDefenseValue>
                      </TypeDefenseItem>
                    ))}
                </TypeDefenses>
              </>
            )}
          </BottomContainer>
        </>
      </Container>
    );
  else return <Container />;
}

export default PokemonDetails;
