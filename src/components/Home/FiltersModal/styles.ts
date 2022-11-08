import styled, { css } from 'styled-components/native';

interface TouchableIconProps {
  marginRight?: string;
  backgroundColor: string;
}

interface ButtonContainerProps {
  backgroundColor: string;
}

interface ButtonTitleProps {
  color: string;
}

export const Container = styled.View`
  max-height: 80%;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const ScrollableContainer = styled.ScrollView`
  display: flex;
`;

export const ContentWrapper = styled.View`
  padding: 30px 40px;
`;

export const Title = styled.Text`
  color: #17171b;
  font-size: 26px;
  font-family: 'SFProDisplayBold';
  line-height: 31px;
`;

export const Subtitle = styled.Text`
  color: #747476;
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  margin-top: 10px;
`;

export const FilterRow = styled.View`
  display: flex;
  flex-direction: column;
  margin-top: 35px;
`;

export const FilterRowTitle = styled.Text`
  font-family: 'SFProDisplayBold';
  font-size: 16px;
  line-height: 19px;
  color: #17171b;
`;

export const FilterRowItems = styled.ScrollView``;

export const TouchableIcon = styled.TouchableOpacity<TouchableIconProps>`
  width: 50px;
  height: 50px;
  align-items: center;
  justify-content: center;
  margin-top: 10px;
  border-radius: 50px;
  background-color: ${({ backgroundColor }) => backgroundColor};

  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `};
`;

export const FilterIcon = styled.Image`
  color: white;
`;

export const ButtonsContainer = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 50px;
`;

export const ButtonContainer = styled.View<ButtonContainerProps>`
  width: 160px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
`;

export const ButtonTitle = styled.Text<ButtonTitleProps>`
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  color: ${({ color }) => color};
`;
