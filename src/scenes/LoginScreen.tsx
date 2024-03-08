import React, {useState} from 'react';
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableHighlight,
  View,
} from 'react-native';
import Validator from '../helpers/Validator';
import {ParamListBase, useNavigation} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';

const EMAIL = 'example@gmail.com';
const PASSWORD = 'Example4#';
const LoginScreen = () => {
  const [email, setEmail] = useState('');
  const [emailError, setEmailError] = useState('');
  const [password, setPassword] = useState('');
  const [passwordError, setPasswordError] = useState('');
  const [loginError, setLoginError] = useState('');
  const navigation = useNavigation<NativeStackNavigationProp<ParamListBase>>();

  const login = () => {
    let error = false;
    if (!Validator.emailValidator(email)) {
      error = true;
      setEmailError('Invalid Email');
    }
    if (!Validator.passwordValidator(password)) {
      error = true;
      setPasswordError('Invalid Password');
    }
    if (!error) {
      if (email === EMAIL && password === PASSWORD) {
        console.log('Login');
        navigation.navigate('HomeScreen');
      } else {
        setLoginError('Failed To Login');
      }
    }
  };
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 24, fontWeight: 'bold'}}>LoginScreen</Text>
      <Text style={{marginTop: 32}}>Email</Text>
      <TextInput
        style={[styles.input, {marginTop: 6}]}
        onChangeText={value => {
          if (emailError) setEmailError('');
          if (loginError) setLoginError('');
          setEmail(value);
        }}
        placeholder="Email"
        keyboardType="email-address"
      />
      {emailError && <Text style={styles.errorText}>{emailError}</Text>}
      <Text style={{marginTop: 16}}>Password</Text>
      <TextInput
        secureTextEntry={true}
        style={[styles.input, {marginTop: 6}]}
        onChangeText={value => {
          if (passwordError) setPasswordError('');
          if (loginError) setLoginError('');
          setPassword(value);
        }}
        placeholder="Password"
      />
      {passwordError && <Text style={styles.errorText}>{passwordError}</Text>}

      {loginError && (
        <Text style={[styles.errorText, {marginTop: 16}]}>{loginError}</Text>
      )}

      <TouchableHighlight
        onPress={() => {
          console.log('Clickedx');
          login();
        }}>
        <View style={[styles.button, {marginTop: 32}]}>
          <Text style={{fontSize: 20}}>LOGIN</Text>
        </View>
      </TouchableHighlight>
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

export default LoginScreen;
