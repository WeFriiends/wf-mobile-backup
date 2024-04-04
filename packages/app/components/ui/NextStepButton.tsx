import { TouchableOpacity, StyleSheet, Text } from 'react-native';

type NextStepButtonProps = {
  isInputValidated: boolean,
  handleInput: (action: string) => void,
  action: string,
  caption: string,
  activeOpacity: number,
  styles: {
    button: {
      marginTop: number;
      borderWidth: number;
      borderRadius: number;
      borderColor: string;
      width: number;
      height: number;
      alignItems: string;
    };
    btnText: {
      fontSize: number;
      color: string;
    };
    validatedText: {
      fontSize: number;
      color: string;
    };
    validatedInput: {
      backgroundColor: string;
      color: string;
      marginTop: number;
      borderWidth: number;
      borderRadius: number;
      borderColor: string;
      width: number;
      height: number;
      alignItems: string;
    };
  },
};

const NextStepButton = (props: NextStepButtonProps) => {
  const { isInputValidated, handleInput, caption, activeOpacity, action, styles } = props;

  const onPressHandler = () => {
    handleInput(action);
  }

  return (
    <TouchableOpacity
      style={isInputValidated ? styles?.validatedInput : styles?.button}
      onPress={onPressHandler}
      activeOpacity={activeOpacity}
      disabled={!isInputValidated}
    >
      <Text
        style={isInputValidated ? styles?.validatedText : styles?.btnText}
      >
        {caption}
      </Text>
    </TouchableOpacity>
  );
}

export default NextStepButton;