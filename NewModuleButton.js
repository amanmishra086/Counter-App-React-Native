import React from 'react';
import { NativeModules, Button, Alert } from 'react-native';

const { CalenderModule } = NativeModules;

const NewModuleButton = () => {
  const onPress = () => {

    //Alert.alert("hello");

    CalenderModule.createCalendarEvent('testName', 'testLocation');
  };

  return (
    <Button
      title="Click to invoke your native module!"
      color="#841584"
      onPress={onPress}
    />
  );
};

export default NewModuleButton;