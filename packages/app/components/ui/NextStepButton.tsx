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
      alignItems: any;
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
      alignItems: any;
    };
  },
};

const NextStepButton = (props: NextStepButtonProps) => {
  const { isInputValidated, handleInput, caption, activeOpacity, action, styles } = props;

  const buttonHandler = () => {
    handleInput(action);
  }

  return (
    <TouchableOpacity
      style={isInputValidated ? styles?.validatedInput : styles?.button}
      onPress={buttonHandler}
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