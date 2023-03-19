import React from 'react';
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
  selectedSortMethod: string;
  setSelectedSortMethod: (value: string) => void;
}

function SortModal({
  isModalVisible,
  setModalVisible,
  selectedSortMethod,
  setSelectedSortMethod,
}: Props) {
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
                onPress={() => setSelectedSortMethod('numberAscendent')}
                backgroundColor={
                  selectedSortMethod === 'numberAscendent'
                    ? '#EA5D60'
                    : '#F2F2F2'
                }
              >
                <ButtonTitle
                  color={
                    selectedSortMethod === 'numberAscendent'
                      ? '#FFFFFF'
                      : '#747476'
                  }
                >
                  Smallest number first
                </ButtonTitle>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => setSelectedSortMethod('numberDescendent')}
                backgroundColor={
                  selectedSortMethod === 'numberDescendent'
                    ? '#EA5D60'
                    : '#F2F2F2'
                }
                marginTop="20px"
              >
                <ButtonTitle
                  color={
                    selectedSortMethod === 'numberDescendent'
                      ? '#FFFFFF'
                      : '#747476'
                  }
                >
                  Highest number first
                </ButtonTitle>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => setSelectedSortMethod('nameAscendent')}
                backgroundColor={
                  selectedSortMethod === 'nameAscendent' ? '#EA5D60' : '#F2F2F2'
                }
                marginTop="20px"
              >
                <ButtonTitle
                  color={
                    selectedSortMethod === 'nameAscendent'
                      ? '#FFFFFF'
                      : '#747476'
                  }
                >
                  A-Z
                </ButtonTitle>
              </ButtonContainer>
              <ButtonContainer
                onPress={() => setSelectedSortMethod('nameDescendent')}
                backgroundColor={
                  selectedSortMethod === 'nameDescendent'
                    ? '#EA5D60'
                    : '#F2F2F2'
                }
                marginTop="20px"
              >
                <ButtonTitle
                  color={
                    selectedSortMethod === 'nameDescendent'
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
