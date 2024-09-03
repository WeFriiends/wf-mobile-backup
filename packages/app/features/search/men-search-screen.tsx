import {ScrollView, StyleSheet, TextStyle, TouchableOpacity} from 'react-native'
import {Text, View} from 'dripsy'

import Logo from '../../public/Logo'
import MenSearchSVG from '../../lib/assets/menSearch/MenSearchSVG'
import Title from '../../components/ui/Title'
import TryLaterSVG from '../../lib/assets/menSearch/TryLaterSVG'
import {useState} from 'react'

const TEXT_STYLE: TextStyle = {
    fontSize: 32,
    fontWeight: '600',
    lineHeight: 38,
    color: '#F46B5D',
    textAlign: 'center',
    alignItems: 'center',
}

const MenSearchScreen = () => {
    const [isMenSearchDone, setIsMenSearchDone] = useState<boolean>(false)

    const onPressHandler = () => {
        setIsMenSearchDone(true)
    }

    return (
        <ScrollView style={styles.commonWrapper}>
            <View style={styles.logoWrapper}>
                <Logo/>
            </View>
            <View style={styles.contentWrapper}>
                <Title
                    isMenSearchDone={isMenSearchDone}
                    textStyle={TEXT_STYLE as TextStyle}
                />
                {isMenSearchDone ? (
                    <View style={styles.illustrationWrapper}>
                        <TryLaterSVG/>
                    </View>
                ) : (
                    <View style={styles.contentInnerWrapper}>
                        <MenSearchSVG/>
                        <TouchableOpacity onPress={onPressHandler} style={styles.okBtn}>
                            <Text style={styles.btnText}>OK</Text>
                        </TouchableOpacity>
                    </View>
                )}
            </View>
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    commonWrapper: {
        backgroundColor: '#fff',
    },
    logoWrapper: {
        marginTop: 40,
        marginBottom: 75,
    },
    contentWrapper: {
        alignItems: 'center',
        maxWidth: 295,
        marginLeft: 'auto',
        marginRight: 'auto',
        textAlign: 'center',
    },
    contentInnerWrapper: {
        marginTop: 20,
        alignItems: 'center',
    },
    illustrationWrapper: {
        marginTop: 60,
    },
    okBtn: {
        backgroundColor: '#FB8F67',
        borderRadius: 10,
        marginTop: 80,
        borderWidth: 0,
        width: 180,
        height: 60,
        alignItems: 'center',
    },
    btnText: {
        color: 'white',
        fontSize: 18,
        fontWeight: '600',
        lineHeight: 60,
        justifyContent: 'center',
    },
})

export default MenSearchScreen
