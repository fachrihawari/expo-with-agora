import 'expo-dev-client';
import React, { useState } from 'react';
import AgoraUIKit from 'agora-rn-uikit';
import { Button, View, TextInput, StyleSheet } from 'react-native';

const App = () => {
  const [videoCall, setVideoCall] = useState(false);
  const [username, setUsername] = useState("")

  /**
   * @type {import('agora-rn-uikit').ConnectionData}
   */
  const connectionData = {
    appId: 'app-id-from-agora',
    channel: 'extraordinary-channel',
    username: username
  }

  /**
   * @type {import('agora-rn-uikit').rtmCallbacks}
   */
  const rtcCallbacks = {
    EndCall: () => {
      setTimeout(() => {
        setVideoCall(false)
      }, 200);
    },
  }

  /**
   * @type {import('agora-rn-uikit').Settings}
   */
  const settings = {
    displayUsername: true,
  }

  const handleJoin = () => {
    setVideoCall(true)
  }

  const handleNameChange = (username) => {
    setUsername(username)
  }

  return (
    <View style={styles.container}>
      {videoCall ? (
        <AgoraUIKit settings={settings} connectionData={connectionData} rtcCallbacks={rtcCallbacks} />
      ) : (
        <View style={styles.form}>
          <TextInput placeholder='Isi Username' style={styles.input} onChangeText={handleNameChange} />
          <Button onPress={handleJoin} title='Join' />
        </View>
      )}
    </View>
  )
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    flexDirection: 'row'
  },
  input: {
    borderWidth: 1,
    width: 200,
    height: 36,
    marginRight: 8,
    paddingHorizontal: 8
  }
})