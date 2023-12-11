import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

const NextStepButton = () => {
  const [isPressed, setIsPressed] = useState(false);

   const onPressInHandler = () => {
    setIsPressed(true);
  };

  const onPressOutHandler = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={[styles.button, { backgroundColor: isPressed ? '#F05A22' : '#FB8F67' }]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      activeOpacity={1}
    >
      <Text style={styles.text}>Next</Text>
    </TouchableOpacity>
  );
}

export default NextStepButton;

const styles = StyleSheet.create({
  button: {
    height: 60,
    width: 350,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: '#FFF',
    fontFamily: 'Inter',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: "600",
    lineHeight: 24,
  },
});