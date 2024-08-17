import { StyleSheet, TextStyle, TouchableOpacity } from 'react-native'
import { Text, View } from 'dripsy'

import Logo from '../../public/Logo'
import MenSearchSVG from '../../lib/assets/menSearch/MenSearchSVG'
import Title from '../../components/ui/Title'
import TryLaterSVG from '../../lib/assets/menSearch/TryLaterSVG'
import { useState } from 'react'

const TEXT_STYLE: TextStyle = {
  fontSize: 32,
  fontWeight: '600',
  lineHeight: 40,
  color: '#F46B5D',
}

const MenSearchScreen = () => {
  const [isMenSearchDone, setIsMenSearchDone] = useState<boolean>(false)

  const onPressHandler = () => {
    setIsMenSearchDone(true)
  }

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <View
        style={{
          height: 80,
          marginTop: 30,
          overflow: 'hidden',
        }}
      >
        <Logo />
      </View>
      <View sx={{ mt: 25 }}>
        <View sx={{ alignItems: 'center' }}>
          <View sx={{ mb: 25 }}>
            <Title
              isMenSearchDone={isMenSearchDone}
              textStyle={TEXT_STYLE as TextStyle}
            />
          </View>
          {isMenSearchDone ? (
            <TryLaterSVG />
          ) : (
            <View sx={{ alignItems: 'center' }}>
              <MenSearchSVG />
              <TouchableOpacity onPress={onPressHandler} style={styles.okBtn}>
                <Text style={styles.btnText}>OK</Text>
              </TouchableOpacity>
            </View>
          )}
        </View>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  okBtn: {
    backgroundColor: 'salmon',
    borderRadius: 10,
    marginTop: 80,
    borderWidth: 2,
    borderColor: 'salmon',
    width: 200,
    height: 50,
    alignItems: 'center',
    padding: 5,
  },
  btnText: {
    color: 'white',
    padding: 10,
    fontSize: 18,
    fontWeight: '400',
  },
})

export default MenSearchScreen
