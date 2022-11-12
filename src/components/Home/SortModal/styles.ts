import styled, { css } from 'styled-components/native';

interface ButtonContainerProps {
  backgroundColor: string;
  marginTop?: string;
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
  padding: 30px 40px 50px 40px;
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

export const ButtonsList = styled.View`
  flex-direction: column;
  margin-top: 35px;
`;

export const ButtonContainer = styled.TouchableOpacity<ButtonContainerProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px 30px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};
`;

export const ButtonTitle = styled.Text<ButtonTitleProps>`
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  color: ${({ color }) => color};
`;
