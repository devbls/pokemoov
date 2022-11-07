import React, { useState } from 'react';
import Modal from 'react-native-modal';

import {
  Container,
  FilterRow,
  FilterRowItems,
  FilterRowTitle,
  Subtitle,
  Title,
  TouchableIcon,
  TypeIcon,
} from './styles';
import { constants } from '../../../utils/constants';

interface Props {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

function FiltersModal({ isModalVisible, setModalVisible }: Props) {
  const [selectedTypes, setSelectedTypes] = useState<string[]>([]);

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
        <Title>Filters</Title>
        <Subtitle>
          Use advanced search to explore Pokémon by type, weakness, height and
          more!
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
                <TypeIcon
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
      </Container>
    </Modal>
  );
}

export default FiltersModal;
