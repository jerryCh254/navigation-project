import {StyleSheet, Text, View, Image, ScrollView} from 'react-native';
import React from 'react';

const Home = ({navigation}) => {
  return (
    <ScrollView>
      <View style={styles.liststyle}>
        <Text style={{fontSize: 30, color: 'black'}}>HomeScreen</Text>

        <Image
          style={styles.ImageStyle}
          source={require('../../assets/text.jpg')}
        />
        <Text style={styles.TextStyle}>
          Adjust the color in a way that looks standard on each platform. On
          iOS, the color prop controls the color of the text. On Android, the
          color adjusts the background color of the button
        </Text>
        <Image
          style={styles.ImageStyle}
          source={require('../../assets/text2.jpg')}
        />
      </View>
    </ScrollView>
  );
};

export default Home;

const styles = StyleSheet.create({
  liststyle: {
    justifyContent: 'flex-start',
    flex: 1,
    alignItems: 'center',
  },
  ImageStyle: {
    width: 300,
    height: 300,
    top: 20,
  },
  TextStyle: {
    textAlign: 'center',
    marginVertical: 30,
    color: 'black',
    fontSize: 20,
  },
});
