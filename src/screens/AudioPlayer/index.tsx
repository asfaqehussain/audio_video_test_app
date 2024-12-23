import React, {useState} from 'react';
import {View, Button, StyleSheet} from 'react-native';
import Sound from 'react-native-sound';
import CommonButton from '../component/button';

const AudioPlayerScreen = () => {
  const [sound, setSound] = useState(null);

  const playAudio = () => {
    const newSound = new Sound('audiofile.mp3', Sound.MAIN_BUNDLE, error => {
      if (error) return console.log('Failed to load sound', error);
      newSound.play(() => newSound.release());
    });
    setSound(newSound);
  };

  const stopAudio = () => {
    if (sound) sound.stop(() => sound.release());
    setSound(null);
  };

  return (
    <View style={styles.container}>
      <CommonButton title="Play" onPress={playAudio} />
      <CommonButton title="Stop" onPress={stopAudio} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', padding: 20},
});

export default AudioPlayerScreen;
