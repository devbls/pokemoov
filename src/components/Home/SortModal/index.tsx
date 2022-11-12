import React, { useState } from 'react';
import Modal from 'react-native-modal';

import {
  Container,
  Subtitle,
  Title,
  ScrollableContainer,
  ContentWrapper,
  ButtonContainer,
  ButtonTitle,
  ButtonsList,
} from './styles';

interface Props {
  isModalVisible: boolean;
  setModalVisible: (value: boolean) => void;
}

function SortModal({ isModalVisible, setModalVisible }: Props) {
  const [selectedSort, setSelectedSort] = useState('');

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
        <ScrollableContainer>
          <ContentWrapper>
            <Title>Sort</Title>
            <Subtitle>
              Sort Pokémons alphabetically or by National Pokédex number!
            </Subtitle>
            <ButtonsList>
              <ButtonContainer
                onPress={() => setSelectedSort('smallestNumber')}
                backgroundColor={
                  selectedSort === 'smallestNumber' ? '#EA5D60' : '#F2F2F2'
                }
              >
                <ButtonTitle
                  color={
                    selectedSort === 'smallestNumber' ? '#FFFFFF' : '#747476'
                  }
                >
                  Smallest number first
                </ButtonTitle>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => setSelectedSort('highestNumber')}
                backgroundColor={
                  selectedSort === 'highestNumber' ? '#EA5D60' : '#F2F2F2'
                }
                marginTop="20px"
              >
                <ButtonTitle
                  color={
                    selectedSort === 'highestNumber' ? '#FFFFFF' : '#747476'
                  }
                >
                  Highest number first
                </ButtonTitle>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => setSelectedSort('alphabeticAscendent')}
                backgroundColor={
                  selectedSort === 'alphabeticAscendent' ? '#EA5D60' : '#F2F2F2'
                }
                marginTop="20px"
              >
                <ButtonTitle
                  color={
                    selectedSort === 'alphabeticAscendent'
                      ? '#FFFFFF'
                      : '#747476'
                  }
                >
                  A-Z
                </ButtonTitle>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => setSelectedSort('alphabeticDescendent')}
                backgroundColor={
                  selectedSort === 'alphabeticDescendent'
                    ? '#EA5D60'
                    : '#F2F2F2'
                }
                marginTop="20px"
              >
                <ButtonTitle
                  color={
                    selectedSort === 'alphabeticDescendent'
                      ? '#FFFFFF'
                      : '#747476'
                  }
                >
                  Z-A
                </ButtonTitle>
              </ButtonContainer>
            </ButtonsList>
          </ContentWrapper>
        </ScrollableContainer>
      </Container>
    </Modal>
  );
}

export default SortModal;
