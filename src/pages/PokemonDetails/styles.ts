import styled, { css } from 'styled-components/native';

interface ContainerProps {
  backgroundColor: string;
}

interface PokemonTypeTagProps {
  marginLeft?: string;
  backgroundColor: string;
}

interface TabTextProps {
  opacity: number;
  fontWeight: string;
}

interface CategoryTitleProps {
  color: string;
  marginTop?: string;
}

interface WeaknessIconProps {
  backgroundColor: string;
  marginLeft?: string;
}

interface CompositeCategoryItemDescriptionProps {
  direction: string;
}

interface StatRowProps {
  marginTop: string;
}

interface StatLabelProps {
  width: string;
  textAlign: string;
  marginLeft?: string;
  fontWeight?: string;
}

interface StatValueProps {
  fontFamily?: string;
}

interface TypeDefenseItemProps {
  marginLeft?: string;
}

interface TypeIconWrapperProps {
  backgroundColor: string;
}

interface CategoryItemDescriptionProps {
  marginTop?: string;
  color?: string;
}

interface StatPercentageBarProps {
  backgroundColor: string;
}

export const Container = styled.ScrollView<ContainerProps>`
  display: flex;
  flex-direction: column;
  background-color: ${({ backgroundColor }) => backgroundColor};
`;

export const TopContainer = styled.View`
  height: 315px;
  padding: 0 40px;
  padding-top: 40px;
`;

export const PokemonInfoWrapper = styled.View`
  flex-direction: row;
  margin-top: 32px;
`;

export const PokemonImage = styled.Image`
  width: 125px;
  height: 125px;
`;

export const PokemonInfo = styled.View`
  flex-direction: column;
  justify-content: center;
  margin-left: 24px;
`;

export const PokemonNumber = styled.Text`
  font-size: 16px;
  font-family: 'SFProDisplayBold';
  line-height: 19px;
  color: rgba(23, 23, 27, 0.6);
`;

export const PokemonName = styled.Text`
  font-size: 32px;
  font-family: 'SFProDisplayBold';
  line-height: 38px;
  color: #ffffff;
`;

export const PokemonTypes = styled.View`
  flex-direction: row;
  margin-top: 5px;
`;

export const PokemonTypeTag = styled.View<PokemonTypeTagProps>`
  flex-direction: row;
  align-items: center;
  justify-content: center;
  padding: 5px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 3px;

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `};
`;

export const PokemonTypeIcon = styled.Image`
  max-width: 15px;
  max-height: 15px;
`;

export const PokemonTypeTagText = styled.Text`
  font-size: 12px;
  line-height: 14px;
  color: #ffffff;
  margin-left: 5px;
`;

export const Tabs = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: auto;
  padding: 15px 0;
`;

export const TabText = styled.Text<TabTextProps>`
  font-size: 16px;
  font-weight: ${({ fontWeight }) => fontWeight};
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  color: #ffffff;
  opacity: ${({ opacity }) => opacity};
`;

export const BottomContainer = styled.View`
  padding: 40px;
  background-color: #fff;
  border-top-left-radius: 30px;
  border-top-right-radius: 30px;
`;

export const Description = styled.Text`
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  color: #747476;
`;

export const CategoryTitle = styled.Text<CategoryTitleProps>`
  font-size: 16px;
  font-family: 'SFProDisplayBold';
  line-height: 19px;
  color: ${({ color }) => color};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};
`;

export const CategoryItem = styled.View`
  flex-direction: row;
  align-items: center;
  margin-top: 20px;
`;

export const CategoryItemTitle = styled.Text`
  width: 84px;
  font-size: 12px;
  font-family: 'SFProDisplayMedium';
  line-height: 14px;
  color: #17171b;
  margin-right: 10px;
`;

export const CategoryItemDescription = styled.Text<CategoryItemDescriptionProps>`
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  color: ${({ color }) => color ?? '#747476'};

  ${({ marginTop }) =>
    marginTop &&
    css`
      margin-top: ${marginTop};
    `};
`;

export const CompositeCategoryItemDescription = styled.View<CompositeCategoryItemDescriptionProps>`
  flex-direction: ${({ direction }) => direction};
`;

export const SmallCategoryItemDescription = styled.Text`
  font-size: 12px;
  font-family: 'SFProDisplayMedium';
  line-height: 14px;
  color: #747476;
  margin-top: 5px;
`;

export const WeaknessIcon = styled.View<WeaknessIconProps>`
  width: 25px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 3px;

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `};
`;

export const Stats = styled.View`
  display: flex;
  flex-direction: column;
`;

export const StatRow = styled.View<StatRowProps>`
  flex-direction: row;
  align-items: center;
  margin-top: ${({ marginTop }) => marginTop};
`;

export const StatName = styled.Text`
  width: 44px;
  font-size: 12px;
  font-family: 'SFProDisplayMedium';
  line-height: 14px;
  color: #17171b;
`;

export const StatValue = styled.Text<StatValueProps>`
  width: 32px;
  font-size: 16px;
  font-family: ${({ fontFamily }) => fontFamily ?? 'SFProDisplayRegular'};
  line-height: 19px;
  text-align: right;
  color: #747476;
  margin-left: 10px;
`;

export const StatPercentageBar = styled.View<StatPercentageBarProps>`
  width: 138px;
  height: 4px;
  margin: 0 20px;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 2px;
`;

export const StatMinValue = styled.Text`
  width: 30px;
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  text-align: right;
  color: #747476;
`;

export const StatMaxValue = styled.Text`
  width: 30px;
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  text-align: right;
  color: #747476;
  margin-left: 10px;
`;

export const StatLabel = styled.Text<StatLabelProps>`
  width: ${({ width }) => width};
  font-size: 12px;
  font-family: 'SFProDisplayMedium';
  line-height: 14px;
  color: #17171b;
  text-align: ${({ textAlign }) => textAlign};

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `};
`;

export const StatsDescription = styled.Text`
  font-size: 12px;
  font-family: 'SFProDisplayMedium';
  line-height: 14px;
  color: #747476;
  margin-top: 20px;
`;

export const TypeDefensesDescription = styled.Text`
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  color: #747476;
  margin-top: 20px;
`;

export const TypeDefenses = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-top: 20px;
`;

export const TypeDefenseItem = styled.View<TypeDefenseItemProps>`
  flex-direction: column;
  justify-content: center;

  ${({ marginLeft }) =>
    marginLeft &&
    css`
      margin-left: ${marginLeft};
    `};
`;

export const TypeIconWrapper = styled.View<TypeIconWrapperProps>`
  width: 25px;
  height: 25px;
  align-items: center;
  justify-content: center;
  background-color: ${({ backgroundColor }) => backgroundColor};
  border-radius: 3px;
`;

export const TypeDefenseValue = styled.Text`
  width: 100%;
  font-size: 16px;
  font-family: 'SFProDisplayRegular';
  line-height: 19px;
  text-align: center;
  color: #747476;
  margin-top: 10px;
`;
