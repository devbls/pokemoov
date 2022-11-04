import React from 'react';

import { Container, Input } from './styles';
import SearchSvg from '../../assets/icons/search-grey.svg';

interface Props {
  value: string;
  setValue: (value: string) => void;
  placeholder: string;
}

function CustomInput({ value, setValue, placeholder }: Props) {
  return (
    <Container>
      <SearchSvg width={16} height={16} alt="Search" />
      <Input
        autoCorrect={false}
        placeholder={placeholder}
        value={value}
        onChangeText={setValue}
      />
    </Container>
  );
}

export default CustomInput;
