import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import Home from './src/screens/Home';
import AudioPlayer from './src/screens/AudioPlayer';
import VideoPlayer from './src/screens/VideoPlayer';
import VideoCall from './src/screens/VideoCall';

const Stack = createStackNavigator();

const App = () => (
  <NavigationContainer>
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="AudioPlayer" component={AudioPlayer} />
      <Stack.Screen name="VideoPlayer" component={VideoPlayer} />
      <Stack.Screen name="CallScreen" component={VideoCall} />
    </Stack.Navigator>
  </NavigationContainer>
);

export default App;
