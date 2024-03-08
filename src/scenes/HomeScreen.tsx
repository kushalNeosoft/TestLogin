import React from 'react';
import {FlatList, StyleSheet, Text, View} from 'react-native';
import ListItem from '../components/ListItem';

const DATA = [
  {
    id: '1',
    title: 'A',
  },
  {
    id: '2',
    title: 'B',
  },
  {
    id: '3',
    title: 'C',
  },
  {
    id: '4',
    title: 'D',
  },
  {
    id: '5',
    title: 'E',
  },
  {
    id: '6',
    title: 'F',
  },
];

const HomeScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>HomeScreen</Text>
      <FlatList
        style={{marginTop: 16}}
        data={DATA}
        renderItem={({item}) => <ListItem title={item.title} />}
        keyExtractor={item => item.id}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
    padding: 16,
  },
  input: {
    // height: 40,
    borderWidth: 1,
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderColor: 'gray',
    borderRadius: 4,
  },
  button: {
    backgroundColor: 'gray',
    paddingHorizontal: 16,
    paddingVertical: 12,
    borderRadius: 8,
    textAlign: 'center',
  },
  errorText: {
    color: 'red',
    fontSize: 12,
    marginTop: 2,
  },
});

export default HomeScreen;
