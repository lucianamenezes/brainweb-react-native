import * as React from 'react';
import {
  View,
} from 'react-native';
import { useSelector, useDispatch } from 'react-redux';

import {
  addCounter,
  deleteCounter,
  incrementCounter,
  decrementCounter,
  resetCounter,
} from '../../redux/counters';
import Card from '../../components/Card';
import Button from '../../components/Button';
import {
  Container,
  ButtonContent,
  CounterLabel,
  SelectedCounterLabel,
} from './styles';

export default function Config() {
  const selectedCounter = useSelector((state) => state.selectedCounter);
  const counters = useSelector((state) => state.counters);
  const counter = selectedCounter.length > 0 && counters.filter((count) => count.id == selectedCounter[0].id);
  const dispatch = useDispatch();
  console.log('COUNTER', counter);
  console.log('SELECTED', selectedCounter);

  function addCount() {
    const counterToAdd = {
      number: 0,
      name: 'new',
    };

    dispatch(addCounter(counterToAdd));
  }

  function deleteCount() {
    dispatch(deleteCounter(selectedCounter[0].id));
  }

  function incrementCount() {
    dispatch(incrementCounter(selectedCounter[0].id));
  }

  function resetCount() {
    dispatch(resetCounter(selectedCounter[0].id));
  }

  function decrementCount() {
    dispatch(decrementCounter(selectedCounter[0].id));
  }


  return (
    <Container>
      <View>
        <CounterLabel>Counters</CounterLabel>
        <ButtonContent>
          <Button
            title="Add Counter"
            onPress={addCount}
          />
          <Button
            disabled
            title="Delete Counter"
            onPress={deleteCount}
          />
        </ButtonContent>
      </View>
      <View>
        {counter.length > 0
          && (
          <>
            <SelectedCounterLabel>
              Selected Counter: {counter[0].id}
            </SelectedCounterLabel>
            <Card
              counter={counter[0]}
              onReset={resetCount}
              onIncrement={incrementCount}
              onDecrement={decrementCount}
            />
          </>
          )}
      </View>
    </Container>
  );
}
