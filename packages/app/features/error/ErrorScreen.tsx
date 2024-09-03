import {ScrollView, StyleSheet} from 'react-native'
import {Text, View} from 'dripsy'
import ErrorSVG from 'app/lib/assets/error/errorSVG'
//import '@expo/match-media'
//import {useMediaQuery} from 'react-responsive'


const ErrorScreen = () => {

    const ErrorStrings = {
        error: {
            code: '',
            text: 'Unable to access the network',
            description: 'Please, check internet connection',
        },
        error400: {
            code: 400,
            text: 'Bad Request',
            description: 'Your request could use a quick coffee break.',
            instruction: 'Take a sip, make fixes, and resend!'
        },
        error500: {
            code: 500,
            text: 'Internal Server Error',
            description: 'It seems like something went wrong',
            instruction: 'Sorry about that.\n\r We&apos;re trying our best to fix it!'
        }
    }

    return (
        <ScrollView style={styles.commonWrapper}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>
                    Error
                    <Text style={styles.errorCode}>{ErrorStrings.error.code}</Text>
                </Text>
                <Text style={styles.errorDescriptionNoCode}>
                    Unable to access the network
                </Text>
                <Text style={styles.instruction}>Please, check internet connection</Text>
                <ErrorSVG/>
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    commonWrapper: {
        backgroundColor: '#fff',
    },
    textWrapper: {
        paddingLeft: 10,
        paddingRight: 10,
        paddingTop: 100,
        alignItems: 'center',
        backgroundColor: '#fff',
        minHeight: '100%',
    },
    title: {
        fontSize: 32,
        fontWeight: 600,
        lineHeight: 32,
        color: '#FB8F67',
        textAlign: 'center',
        maxWidth: 274,
    },
    errorCode: {
        fontSize: 60,
        color: '#FB8F67',
        paddingTop: 10,
    },
    errorDescriptionNoCode: {
        fontSize: 24,
        fontWeight: 600,
        lineHeight: 30,
        color: '#FB8F67',
        marginTop: 46,
        paddingBottom: 70,
        maxWidth: 274,
        textAlign: 'center',
    },
    instruction: {
        fontSize: 20,
        fontWeight: 600,
        lineHeight: 26,
        color: '#F46B5D',
        paddingBottom: 15,
        maxWidth: 274,
        textAlign: 'center',
    },
})

export default ErrorScreen
