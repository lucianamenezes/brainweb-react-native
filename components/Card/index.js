import React from 'react';
import { View } from 'react-native';

import ButtonCard from './Button';
import {
  Container,
  Title,
  TitleContent,
  Number,
  NumberContent,
} from './styles';

const Card = ({
  counter, selected, onPress, onIncrement, onDecrement, onReset,
}) => {
  function renderButtons() {
    return (
      <View>
        <ButtonCard
          title="Incrementar"
          iconName="md-add-circle"
          onPress={onIncrement}
        />
        <ButtonCard
          title="Decrementar"
          iconName="md-remove-circle"
          onPress={onDecrement}
        />
        <ButtonCard
          title="Resetar"
          iconName="md-undo"
          onPress={onReset}
        />
      </View>
    );
  }
  return (
    <Container selected={selected} onPress={onPress}>
      <TitleContent>
        {!onIncrement
                        && <Title>{counter.name}</Title>}
        {(onIncrement && onDecrement && onReset)
                    && renderButtons()}
      </TitleContent>
      <NumberContent>
        <Number>{counter.number}</Number>
      </NumberContent>
    </Container>
  );
};

export default Card;
