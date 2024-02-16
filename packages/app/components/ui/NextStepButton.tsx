import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import React, { useState } from 'react';

type NextStepButtonProps = {
  isInputValidated: boolean,
  handleInput: () => void;
};

const NextStepButton = (props: NextStepButtonProps) => {
  const { isInputValidated, handleInput } = props;

  return (
    <TouchableOpacity
      style={isInputValidated ? styles.validatedInput : styles.button}
      onPress={handleInput}
      activeOpacity={1}
      disabled={!isInputValidated}
    >
      <Text
        style={isInputValidated ? styles.validatedText : styles.btnText}
      >
        Next
      </Text>
    </TouchableOpacity>
  );
}

export default NextStepButton;

const styles = StyleSheet.create({
  text: {
    color: '#FFF',
    fontSize: 18,
    fontStyle: 'normal',
    fontWeight: "600",
    lineHeight: 24,
  },
  validatedInput: {
    backgroundColor: 'salmon',
    text: 'white',
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'salmon',
    width: 300,
    height: 40,
    alignItems: 'center',
    padding: 5,
  },
  button: {
    marginTop: 10,
    borderWidth: 2,
    borderRadius: 5,
    borderColor: 'salmon',
    width: 300,
    height: 40,
    alignItems: 'center',
    padding: 5,
  },
  btnText: {
    fontSize: 18,
    color: 'salmon',
  },
  validatedText: {
    fontSize: 18,
    color: 'white',
  },
});