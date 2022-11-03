import {React, useCallback} from 'react';
import {View, Text, TextInput, Pressable, FlatList} from 'react-native';

const Child = props => {
  props.func('My name is Dean Winchester & this is my brother Sammie');

  return (
    <>
      <Text>I am the Child Component!</Text>
    </> 
  );
};

export default Child;
