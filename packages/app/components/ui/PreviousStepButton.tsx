import {
  TouchableOpacity,
  StyleSheet,
  ViewStyle,
  StyleProp,
  TextStyle,
} from 'react-native';
import { useState } from 'react';
import BackArrowSVG from '../../lib/assets/BackArrowSVG';

type PreviousStepButtonProps = {
  handleInput: (action: string) => void,
  action: string,
  // styles: {
  //   circle: {
  //     width: number,
  //     height: number,
  //     borderRadius: number,
  //     paddingTop: number,
  //     paddingLeft: number,
  //     cursor: string,
  //   }
  // }
  styles?: StyleProp<ViewStyle> | StyleProp<TextStyle>
};

const PreviousStepButton = (props: PreviousStepButtonProps) => {
  const { handleInput, action, styles } = props;

  const [isPressed, setIsPressed] = useState<boolean>(false);

  const onPressInHandler = () => {
    console.log("in")
    setIsPressed(true);
  };

  const onPressOutHandler = () => {
    console.log("out")
    setIsPressed(false);
    handleInput(action);
  };

  return (
    <TouchableOpacity
      style={[defaultStyle.circle, styles, { backgroundColor: isPressed ? '#FB8F67' : '#FEDED2' }]}
      onPressIn={onPressInHandler}
      onPressOut={onPressOutHandler}
      activeOpacity={1}
    >
      <BackArrowSVG />
    </TouchableOpacity>
  );
}

const defaultStyle = StyleSheet.create({
  circle: {
    width: 45,
    height: 45,
    borderRadius: 50,
    paddingTop: 11,
    paddingLeft: 10,
    cursor: 'pointer',
  },
})

export default PreviousStepButton;