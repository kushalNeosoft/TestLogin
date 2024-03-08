import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const ListItem = ({title}: {title: string}) => {
  return (
    <View style={styles.container}>
      <Text style={{}}>{title}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'gray',
    padding: 16,
    marginTop: 4,
  },
});

export default ListItem;
