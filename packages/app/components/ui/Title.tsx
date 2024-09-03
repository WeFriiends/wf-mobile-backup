import {StyleProp, TextStyle, View} from 'react-native'

import {Text} from 'dripsy'

type TitleProps = {
    isMenSearchDone: boolean
    textStyle: StyleProp<TextStyle>
}

const INITIAL_SCREEN_TITLE = 'Sorry!' + "\n" + 'There are no friends in your area'
const TRY_LATER_SCREEN_TITLE = 'Try again later'

const Title = ({isMenSearchDone, textStyle}: TitleProps) => {
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
export default Title
