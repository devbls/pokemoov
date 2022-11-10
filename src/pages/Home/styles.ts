import styled, { css } from 'styled-components/native';

interface TouchableIconProps {
  marginRight?: string;
}

interface CardProps {
  backgroundColor: string;
}

interface CardTagProps {
  marginLeft?: string;
  backgroundColor: string;
}

export const Container = styled.ScrollView`
  display: flex;
  flex: 1;
  padding: 0 40px;
  background-color: #fff;
`;

export const FiltersStack = styled.View`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  margin-top: 40px;
`;

export const TouchableIcon = styled.TouchableOpacity<TouchableIconProps>`
  ${({ marginRight }) =>
    marginRight &&
    css`
      margin-right: ${marginRight};
    `};
`;

export const Title = styled.Text`
  color: #17171b;
  font-size: 32px;
  font-family: 'SFProDisplayBold';
  line-height: 38px;
  margin-top: 36px;
`;

export const Subtitle = styled.Text`
  color: #747476;
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  margin-top: 10px;
`;

export const InputWrapper = styled.View`
  margin-top: 24px;
`;

export const Card = styled.TouchableOpacity<CardProps>`
  height: 116px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 10px;
  position: relative;
`;

export const CardInfoWrapper = styled.View`
  flex-direction: column;
`;

export const CardNumber = styled.Text`
  font-size: 12px;
  font-family: 'SFProDisplayBold';
  line-height: 14px;
  color: rgba(23, 23, 27, 0.6);
`;

export const CardTitle = styled.Text`
  font-size: 26px;
  font-family: 'SFProDisplayBold';
  line-height: 31px;
  color: #ffffff;
`;

export const CardTags = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const CardTag = styled.View<CardTagProps>`
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 3px;

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `};
`;

export const CardTagText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-left: 5px;
`;

export const PokemonImageWrapper = styled.View`
  position: absolute;
  right: 5%;
  top: -30%;
`;

export const PokemonImage = styled.Image`
  width: 130px;
  height: 130px;
`;

export const TypeIcon = styled.Image`
  width: 15px;
  height: 15px;
`;

export const ListContainer = styled.View`
  margin-bottom: 40px;
`;
