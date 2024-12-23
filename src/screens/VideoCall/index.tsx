import React from 'react';
import {createAgoraRtcEngine} from 'react-native-agora';
import AgoraUIKit from 'agora-rn-uikit';

const App = () => {
  const engine = createAgoraRtcEngine();
  engine.initialize({appId: 'APP_ID'});

  const connectionData = {
    appId: 'APP_ID',
    channel: 'test',
    token: null,
  };
  return <AgoraUIKit connectionData={connectionData} />;
};

export default App;
