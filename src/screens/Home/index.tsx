import React from 'react';
import {View, Button, StyleSheet} from 'react-native';
import CommonButton from '../component/button';

const HomeScreen = ({navigation}: {navigation: any}) => (
  //This is the home screen
  <View style={styles.container}>
    <CommonButton
      title="Audio Player"
      onPress={() => navigation.navigate('AudioPlayer')}
    />
    <CommonButton
      title="Video Player"
      onPress={() => navigation.navigate('VideoPlayer')}
    />
    <CommonButton
      title="Call Screen"
      onPress={() => navigation.navigate('CallScreen')}
    />
  </View>
);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 20,
  },
});

export default HomeScreen;
