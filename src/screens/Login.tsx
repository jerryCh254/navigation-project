import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  TextInput,
} from 'react-native';

const Login = ({navigation}) => {
  return (
    <View style={styles.liststyle}>
      <Text style={styles.textstyle}>LoginForm</Text>
      <Text style={styles.dis}>
        You can reach thier any time via zubair.com
      </Text>
      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter your name</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
        />
        <Text style={styles.labels}>Enter your password</Text>
        <TextInput
          style={styles.inputStyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}
        />
        <TouchableOpacity
          style={styles.buttonstyle}
          onPress={() => navigation.navigate('Home')}>
          <Text style={styles.loginstyle}>Login</Text>
        </TouchableOpacity>
      </View>
      <TouchableOpacity
        style={{
            marginTop:100,
          backgroundColor: 'lightgreen',
          height: 45,
          width: '50%',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onPress={() => navigation.navigate('Home')}>
        <Text style={{color: 'white'}}>go to home screen</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  liststyle: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    paddingHorizontal: 30,
    paddingTop: 30,
  },
  textstyle: {
    color: 'black',
    fontSize: 22,
    fontWeight: 'bold',
  },
  dis: {
    textAlign: 'lefts',
    color: 'black',
    fontSize: 18,
  },
  labels: {
    fontSize: 18,
    color: '#7d7d7d',
    marginTop: 30,
    marginBottom: 5,
    lineHeight: 25,
    fontFamily: 'regular',
  },
  inputStyle: {
    width: 300,
    borderWidth: 2,
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
    fontFamily: 'regular',
    borderColor: 'rgba(0,0,0,0.3)',
    color: 'black',
  },
  buttonstyle: {
    justifyContent: 'center',
    width: 300,
    height: 50,
    marginTop: 40,
    color: 'blue',
    backgroundColor: 'lightgreen',
    fontFamily: 'regular',
    borderRadius: 5,
  },
  loginstyle: {
    justifyContent: 'center',
    textAlign: 'center',
    fontSize: 18,
    color: 'black',
  },
});
