import { TouchableOpacity, StyleSheet, Text } from 'react-native';

type NextStepButtonProps = {
  isInputValidated: boolean,
  handleInput: (action: string) => void;
  caption: string;
  activeOpacity: number;
  action: string;
  style: {
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
      text: string;
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
  const { isInputValidated, handleInput, caption, activeOpacity, action, style } = props;

  const buttonHandler = () => {
    handleInput(action);
  }

  return (
    <TouchableOpacity
      style={isInputValidated ? style?.validatedInput : style?.button}
      onPress={buttonHandler}
      activeOpacity={activeOpacity}
      disabled={!isInputValidated}
    >
      <Text
        style={isInputValidated ? style?.validatedText : style?.btnText}
      >
        {caption}
      </Text>
    </TouchableOpacity>
  );
}

export default NextStepButton;

// const styles = StyleSheet.create({
//   button: {
//     marginTop: 10,
//     borderWidth: 2,
//     borderRadius: 5,
//     borderColor: 'salmon',
//     width: 300,
//     height: 40,
//     alignItems: 'center',
//   },
//   btnText: {
//     fontSize: 18,
//     color: 'salmon',
//   },
//   validatedText: {
//     fontSize: 18,
//     color: 'white',
//   },
//   validatedInput: {
//     backgroundColor: 'salmon',
//     text: 'white',
//     marginTop: 10,
//     borderWidth: 2,
//     borderRadius: 5,
//     borderColor: 'salmon',
//     width: 300,
//     height: 40,
//     alignItems: 'center',
//   },
// })