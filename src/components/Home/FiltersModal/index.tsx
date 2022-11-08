import React, { useState } from 'react';
import Modal from 'react-native-modal';
import { TouchableHighlight } from 'react-native';

import {
  Container,
  FilterRow,
  FilterRowItems,
  FilterRowTitle,
  Subtitle,
  Title,
  TouchableIcon,
  FilterIcon,
  ScrollableContainer,
  ContentWrapper,
  ButtonsContainer,
  ButtonContainer,
  ButtonTitle,
} from './styles';
import { constants } from '../../../utils/constants';

interface Props {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

function FiltersModal({ isModalVisible, setModalVisible }: Props) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);
  const [selectedWeaknesses, setSelectedWeaknesses] = useState<string[]>([]);
  const [selectedHeights, setSelectedHeights] = useState<string[]>([]);
  const [selectedWeights, setSelectedWeights] = useState<string[]>([]);

  function handleSelectedTypes(value: string) {
    const newArray = [...selectedTypes];

    const filteredArray = newArray.filter((item) => value === item);

    if (filteredArray.length > 0) {
      newArray.splice(newArray.indexOf(value), 1);
    } else {
      newArray.push(value);
    }

    setSelectedTypes(newArray);
  }

  function handleSelectedWeaknesses(value: string) {
    const newArray = [...selectedWeaknesses];

    const filteredArray = newArray.filter((item) => value === item);

    if (filteredArray.length > 0) {
      newArray.splice(newArray.indexOf(value), 1);
    } else {
      newArray.push(value);
    }

    setSelectedWeaknesses(newArray);
  }

  function handleSelectedHeights(value: string) {
    const newArray = [...selectedHeights];

    const filteredArray = newArray.filter((item) => value === item);

    if (filteredArray.length > 0) {
      newArray.splice(newArray.indexOf(value), 1);
    } else {
      newArray.push(value);
    }

    setSelectedHeights(newArray);
  }

  function handleSelectedWeights(value: string) {
    const newArray = [...selectedWeights];

    const filteredArray = newArray.filter((item) => value === item);

    if (filteredArray.length > 0) {
      newArray.splice(newArray.indexOf(value), 1);
    } else {
      newArray.push(value);
    }

    setSelectedWeights(newArray);
  }

  function clearFilters() {
    setSelectedTypes([]);
    setSelectedWeaknesses([]);
    setSelectedHeights([]);
    setSelectedWeights([]);
  }

  return (
    <Modal
      isVisible={isModalVisible}
      onBackdropPress={() => setModalVisible(false)}
      useNativeDriver
      style={{
        justifyContent: 'flex-end',
        margin: 0,
      }}
    >
      <Container>
        <ScrollableContainer
          alwaysBounceHorizontal={false}
          alwaysBounceVertical={false}
          bounces={false}
        >
          <ContentWrapper>
            <Title>Filters</Title>
            <Subtitle>
              Use advanced search to explore Pokémon by type, weakness, height
              and more!
            </Subtitle>
            <FilterRow>
              <FilterRowTitle>Types</FilterRowTitle>
              <FilterRowItems horizontal showsHorizontalScrollIndicator={false}>
                {constants.TYPE_ICONS.map((type, index) => (
                  <TouchableIcon
                    key={String(index)}
                    marginRight="10px"
                    onPress={() => handleSelectedTypes(type.name)}
                    backgroundColor={
                      selectedTypes.indexOf(type.name) !== -1
                        ? type.color
                        : 'transparent'
                    }
                  >
                    <FilterIcon
                      source={type.icon}
                      style={{
                        tintColor:
                          selectedTypes.indexOf(type.name) !== -1
                            ? 'white'
                            : type.color,
                      }}
                    />
                  </TouchableIcon>
                ))}
              </FilterRowItems>
            </FilterRow>
            <FilterRow>
              <FilterRowTitle>Weaknesses</FilterRowTitle>
              <FilterRowItems horizontal showsHorizontalScrollIndicator={false}>
                {constants.TYPE_ICONS.map((weakness, index) => (
                  <TouchableIcon
                    key={String(index)}
                    marginRight="10px"
                    onPress={() => handleSelectedWeaknesses(weakness.name)}
                    backgroundColor={
                      selectedWeaknesses.indexOf(weakness.name) !== -1
                        ? weakness.color
                        : 'transparent'
                    }
                  >
                    <FilterIcon
                      source={weakness.icon}
                      style={{
                        tintColor:
                          selectedWeaknesses.indexOf(weakness.name) !== -1
                            ? 'white'
                            : weakness.color,
                      }}
                    />
                  </TouchableIcon>
                ))}
              </FilterRowItems>
            </FilterRow>
            <FilterRow>
              <FilterRowTitle>Heights</FilterRowTitle>
              <FilterRowItems horizontal showsHorizontalScrollIndicator={false}>
                {constants.HEIGHTS_ICONS.map((height, index) => (
                  <TouchableIcon
                    key={String(index)}
                    marginRight="10px"
                    onPress={() => handleSelectedHeights(height.name)}
                    backgroundColor={
                      selectedHeights.indexOf(height.name) !== -1
                        ? height.color
                        : 'transparent'
                    }
                  >
                    <FilterIcon
                      source={height.icon}
                      style={{
                        tintColor:
                          selectedHeights.indexOf(height.name) !== -1
                            ? 'white'
                            : height.color,
                      }}
                    />
                  </TouchableIcon>
                ))}
              </FilterRowItems>
            </FilterRow>
            <FilterRow>
              <FilterRowTitle>Weights</FilterRowTitle>
              <FilterRowItems horizontal showsHorizontalScrollIndicator={false}>
                {constants.WEIGHTS_ICONS.map((weight, index) => (
                  <TouchableIcon
                    key={String(index)}
                    marginRight="10px"
                    onPress={() => handleSelectedWeights(weight.name)}
                    backgroundColor={
                      selectedWeights.indexOf(weight.name) !== -1
                        ? weight.color
                        : 'transparent'
                    }
                  >
                    <FilterIcon
                      source={weight.icon}
                      style={{
                        tintColor:
                          selectedWeights.indexOf(weight.name) !== -1
                            ? 'white'
                            : weight.color,
                      }}
                    />
                  </TouchableIcon>
                ))}
              </FilterRowItems>
            </FilterRow>
            <ButtonsContainer>
              <TouchableHighlight
                onPress={clearFilters}
                style={{ borderRadius: 10 }}
              >
                <ButtonContainer backgroundColor="#F2F2F2">
                  <ButtonTitle color="#747476">Reset</ButtonTitle>
                </ButtonContainer>
              </TouchableHighlight>
              <TouchableHighlight
                onPress={() => setModalVisible(false)}
                style={{ borderRadius: 10 }}
              >
                <ButtonContainer backgroundColor="#EA5D60">
                  <ButtonTitle color="#FFFFFF">Apply</ButtonTitle>
                </ButtonContainer>
              </TouchableHighlight>
            </ButtonsContainer>
          </ContentWrapper>
        </ScrollableContainer>
      </Container>
    </Modal>
  );
}

export default FiltersModal;
