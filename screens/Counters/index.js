import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { FlatList } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';

import { selectCounter } from '../../redux/counters';
import Card from '../../components/Card';
import {
  Container,
  EmptyContentLabel,
  EmptyLabel,
} from './styles';


export default function Counters() {
  const counters = useSelector((state) => state.counters);
  const state = useSelector((state) => state);
  const selectedCounter = useSelector((state) => state.selectedCounter);
  const dispatch = useDispatch();

  function onSelect(item) {
    dispatch(selectCounter(item.id));
  }


  return (
    <Container>
      {counters.length > 0
        ? (
          <ScrollView style={{ flex: 1 }}>
            <FlatList
              data={counters}
              renderItem={({ item }) => (
                <Card
                  counter={item}
                  onPress={() => onSelect(item)}
                  selected={selectedCounter.length > 0 && item.id === selectedCounter[0].id}
                />
              )}
              keyExtractor={(item) => item.id.toString()}
            />
          </ScrollView>
        )
        : (
          <EmptyContentLabel>
            <EmptyLabel>Não há nenhum counter.</EmptyLabel>
          </EmptyContentLabel>
        )}
    </Container>
  );
}
