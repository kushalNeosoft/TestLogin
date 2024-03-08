import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const SplashScreen = () => {
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();
  const [seconds, setSeconds] = useState(5);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds(seconds - 1);
      if (seconds === 0) {
        navigation.navigate('LoginScreen');
      }
    }, 1000);

    return () => clearInterval(interval);
  }, [seconds, navigation]);

  return (
    <View style={styles.container}>
      <Text>SplashScreen</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'lightgray',
    padding: 16,
  },
});

export default SplashScreen;
