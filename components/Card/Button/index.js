import React from 'react';

import { Container, Title, Icon } from './styles';

const Button = ({ title, onPress, iconName }) => (
  <Container>
    <Icon name={iconName} />
    <Title onPress={onPress}>
      {title}
    </Title>
  </Container>
);

export default Button;
