import {ScrollView, StyleSheet} from 'react-native';
import {Text, View} from 'dripsy';
import ErrorSVG from 'app/lib/assets/error/errorSVG';
//todo: research and add import '@expo/match-media'
//todo: research and add import {useMediaQuery} from 'react-responsive'

type ErrorScreenProps = {
    errorCode?: number;
};

const errorData = {
    400: {
        code: 400,
        text: 'Bad Request',
        description: 'Your request could use a quick coffee break.',
        instruction: 'Take a sip, make fixes, and resend!',
    },
    500: {
        code: 500,
        text: 'Internal Server Error',
        description: 'It seems like something went wrong',
        instruction: "Sorry about that.\n We're trying our best to fix it!",
    },
    default: {
        text: 'Unable to access the network',
        description: 'Please, check internet connection',
    },
};

const ErrorScreen = ({errorCode}: ErrorScreenProps) => {
    const currentError = errorData[errorCode] || errorData.default;
    const isDefaultError = currentError === errorData.default;

    return (
        <ScrollView style={styles.commonWrapper}>
            <View style={styles.textWrapper}>
                <Text style={styles.title}>
                    Error
                    {currentError.code && (
                        <Text style={styles.errorCode}>
                            {'\n'}
                            {currentError.code}
                        </Text>
                    )}
                </Text>
                <Text style={[styles.errorDescription, isDefaultError && styles.errorDescriptionNoCode]}>
                    {currentError.text}
                </Text>
                <Text style={styles.instruction}>
                    {currentError.description}
                </Text>
                <ErrorSVG/>
                <Text style={[styles.instruction, styles.pt15]}>
                    {currentError.instruction}
                </Text>
            </View>
        </ScrollView>
    );
};

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
        fontWeight: '600',
        lineHeight: 32,
        color: '#FB8F67',
        textAlign: 'center',
        maxWidth: 274,
    },
    errorCode: {
        fontSize: 60,
        lineHeight: 70,
        color: '#F46B5D',
        paddingTop: 10,
    },
    errorDescription: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 26,
        color: '#FB8F67',
        marginTop: 10,
        paddingBottom: 70,
        maxWidth: 274,
        textAlign: 'center',
    },
    errorDescriptionNoCode: {
        fontSize: 24,
        lineHeight: 30,
        marginTop: 46,
    },
    instruction: {
        fontSize: 20,
        fontWeight: '600',
        lineHeight: 26,
        color: '#F46B5D',
        paddingBottom: 15,
        maxWidth: 274,
        textAlign: 'center',
    },
    pt15: {
        paddingTop: 15,
    }
});

export default ErrorScreen;
