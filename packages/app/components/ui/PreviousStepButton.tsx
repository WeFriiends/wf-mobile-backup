import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import React, { useState } from 'react';

const PreviousStepButton = () => {
  const [isPressed, setIsPressed] = useState(false);

   const onPressInHandler = () => {
    setIsPressed(true);
  };

  const onPressOutHandler = () => {
    setIsPressed(false);
  };

  return (
    <TouchableOpacity
      style={[styles.circle, { backgroundColor: isPressed ? '#FB8F67' : '#FEDED2' }]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      activeOpacity={1}
    >
      <Image style={styles.icon} source={require('./arrow_back.png')} />
    </TouchableOpacity>
  );
}

export default PreviousStepButton;

const styles = StyleSheet.create({
  circle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    paddingTop: 11,
    paddingLeft: 10,
    cursor: 'pointer',
  },
  icon: {
    width: 25,
    height: 25,
  }
});