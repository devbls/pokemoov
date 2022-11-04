import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';

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
} from './styles';
import GenerationsSvg from '../../assets/icons/generations.svg';
import SortSvg from '../../assets/icons/sort.svg';
import FiltersSvg from '../../assets/icons/filters.svg';
import GrassTypeWhiteSvg from '../../assets/icons/types/grass-white.svg';
import PoisonTypeWhiteSvg from '../../assets/icons/types/poison-white.svg';
import BulbasaurSvg from '../../assets/images/pokemon/bulbasaur.svg';
import IvysaurSvg from '../../assets/images/pokemon/ivysaur.svg';
import CustomInput from '../../components/CustomInput';

function Home() {
  const [searchQuery, setSearchQuery] = useState('');

  return (
    <Container>
      <FiltersStack>
        <TouchableIcon marginRight="24px">
          <GenerationsSvg width={24} height={24} alt="Generations" />
        </TouchableIcon>
        <TouchableIcon marginRight="24px">
          <SortSvg width={24} height={24} alt="Sort" />
        </TouchableIcon>
        <TouchableIcon>
          <FiltersSvg width={24} height={24} alt="Filters" />
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
      <ScrollView>
        <Card>
          <CardInfoWrapper>
            <CardNumber>#001</CardNumber>
            <CardTitle>Bulbasaur</CardTitle>
            <CardTags>
              <CardTag backgroundColor="#62B957">
                <GrassTypeWhiteSvg width={15} height={15} alt="Grass Type" />
                <CardTagText>Grass</CardTagText>
              </CardTag>
              <CardTag backgroundColor="#A552CC" marginLeft="5px">
                <PoisonTypeWhiteSvg width={15} height={15} alt="Poison Type" />
                <CardTagText>Poison</CardTagText>
              </CardTag>
            </CardTags>
          </CardInfoWrapper>
          <View
            style={{
              position: 'absolute',
              right: '5%',
              top: '-30%',
            }}
          >
            <BulbasaurSvg width={130} height={130} alt="Bulbasaur" />
          </View>
        </Card>
        <Card>
          <CardInfoWrapper>
            <CardNumber>#002</CardNumber>
            <CardTitle>Ivysaur</CardTitle>
            <CardTags>
              <CardTag backgroundColor="#62B957">
                <GrassTypeWhiteSvg width={15} height={15} alt="Grass Type" />
                <CardTagText>Grass</CardTagText>
              </CardTag>
              <CardTag backgroundColor="#A552CC" marginLeft="5px">
                <PoisonTypeWhiteSvg width={15} height={15} alt="Poison Type" />
                <CardTagText>Poison</CardTagText>
              </CardTag>
            </CardTags>
          </CardInfoWrapper>
          <View
            style={{
              position: 'absolute',
              right: '5%',
              top: '-30%',
            }}
          >
            <IvysaurSvg width={130} height={130} alt="Bulbasaur" />
          </View>
        </Card>
      </ScrollView>
    </Container>
  );
}

export default Home;
