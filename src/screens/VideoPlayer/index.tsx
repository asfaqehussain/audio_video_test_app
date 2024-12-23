import React, {useRef} from 'react';
import {View, StyleSheet} from 'react-native';
import Video from 'react-native-video';

const VideoPlayerScreen = () => {
  const videoRef = useRef(null);

  return (
    <View style={styles.container}>
      <Video
        ref={videoRef}
        source={require('./videoFile.mp4')}
        style={styles.video}
        controls
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {flex: 1, justifyContent: 'center', alignItems: 'center'},
  video: {width: '100%', height: '50%'},
});

export default VideoPlayerScreen;
