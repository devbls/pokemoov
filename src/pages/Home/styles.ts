import styled, { css } from 'styled-components/native';

interface TouchableIconProps {
  marginRight?: string;
}

interface CardTagProps {
  marginLeft?: string;
  backgroundColor: string;
}

export const Container = styled.View`
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

export const Card = styled.View`
  height: 116px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  padding: 20px;
  background: #8bbe8a;
  border-radius: 10px;
  position: relative;
`;

export const CardInfoWrapper = styled.View`
  flex-direction: column;
`;

export const CardNumber = styled.Text`
  font-size: 12px;
  font-weight: 700;
  font-family: 'SFProDisplayRegular';
  line-height: 14px;
  color: rgba(23, 23, 27, 0.6);
`;

export const CardTitle = styled.Text`
  font-size: 26px;
  font-weight: 700;
  font-family: 'SFProDisplayRegular';
  line-height: 31px;
  color: #ffffff;
`;

export const CardTags = styled.View`
  display: flex;
  flex-direction: row;
  margin-top: 5px;
`;

export const CardTag = styled.View<CardTagProps>`
  height: 25px;
  display: flex;
  flex-direction: row;
  align-items: center;
  padding: 0 5px;
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