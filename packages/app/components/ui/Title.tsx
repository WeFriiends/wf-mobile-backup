import { StyleProp, StyleSheet, TextStyle, View } from 'react-native'

import { Text } from 'dripsy'

type TitleProps = {
  isMenSearchDone: boolean
  textStyle: StyleProp<TextStyle>
}

const INITIAL_SCREEN_TITLE = 'Sorry! There are no friends in your area'
const TRY_LATER_SCREEN_TITLE = 'Try again later'

const Title = ({ isMenSearchDone, textStyle }: TitleProps) => {
  return (
    <View>
      {isMenSearchDone ? (
        <Text style={textStyle}>{TRY_LATER_SCREEN_TITLE}</Text>
      ) : (
        <Text style={textStyle}>{INITIAL_SCREEN_TITLE}</Text>
      )}
    </View>
  )
}

const styles = StyleSheet.create({
  text: {
    fontWeight: '600',
    fontSize: 32,
    lineHeight: 40,
    color: '#F46B5D',
  },
})
export default Title
