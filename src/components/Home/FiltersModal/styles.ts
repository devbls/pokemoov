import styled, { css } from 'styled-components/native';

interface TouchableIconProps {
  marginRight?: string;
  backgroundColor: string;
}

export const Container = styled.View`
  display: flex;
  padding: 30px 40px;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
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

export const TypeIcon = styled.Image`
  color: white;
`;
