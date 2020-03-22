import React from 'react';

import { Container, Title } from './styles';

const Button = ({ title, onPress, disabled }) => (
  <Container disabled={disabled}>
    <Title onPress={onPress}>
      {title}
    </Title>
  </Container>
);

export default Button;
