```markdown
# Multimedia App

This project is a React Native application that integrates multimedia features such as audio playback, video playback, and real-time communication through video calls. It uses the Agora SDK for seamless video call functionality.

## Features

- **Audio Playback**: Play and stop local audio files.
- **Video Playback**: Play videos with controls for play, pause, and seek.
- **Video Calls**: Real-time video communication using Agora SDK.

## Prerequisites

1. **Node.js**: Install Node.js from [Node.js Downloads](https://nodejs.org/).
2. **React Native CLI**: Install globally using:
   ```bash
   npm install -g react-native-cli
   ```
3. **Android Studio/Xcode**: Set up emulators or physical device testing environments.
4. **Agora Account**: Sign up at [Agora Console](https://console.agora.io/) and retrieve the App ID.

## Setup Instructions

### Clone the Repository
```bash
git clone https://github.com/asfaqehussain/audio_video_test_app
cd multimedia-app
```

### Install Dependencies
```bash
npm install
```

### Add Agora App ID
1. Go to `videocall.js`.
2. Replace the placeholder `app-id` with your Agora App ID:
   ```javascript
   const APP_ID = '43de8f2ab25b4cb4bdbb99c231d09bd8';
   ```

### Android Permissions
Edit `AndroidManifest.xml`:
```xml
<uses-permission android:name="android.permission.CAMERA" />
<uses-permission android:name="android.permission.RECORD_AUDIO" />
```

### iOS Permissions
Edit `Info.plist`:
```xml
<key>NSCameraUsageDescription</key>
<string>We need access to your camera for video calls.</string>
<key>NSMicrophoneUsageDescription</key>
<string>We need access to your microphone for audio calls.</string>
```

### Running the App
1. For Android:
   ```bash
   npx react-native run-android
   ```
2. For iOS:
   ```bash
   npx react-native run-ios
   ```

## Screens

1. **Home Screen**: Navigate to Audio Player, Video Player, and Call Screen.
2. **Audio Player**: Play and stop audio files.
3. **Video Player**: Play video files with playback controls.
4. **Call Screen**: Join or leave video calls with real-time video communication.

## Key Libraries Used

- **react-navigation**: For screen navigation.
- **react-native-sound**: For audio playback.
- **react-native-video**: For video playback.
- **react-native-agora**: For real-time video calls.

## Optional Features

- **Mute/Unmute Audio**: Control the microphone during video calls.
- **Switch Camera**: Toggle between front and rear cameras during video calls.



