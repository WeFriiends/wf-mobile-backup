import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import Logo from 'app/public/Logo'
import { Button, Text } from 'react-native-paper'
import {
  FooterSvgComponent,
  HeaderSvgComponent,
} from 'app/public/GladScreenSvg'

const GladScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <HeaderSvgComponent />
      <View
        style={{
          alignItems: 'center',
        }}
      >
        <View style={styles.logoView}>
          <Logo />
        </View>
        <Text style={styles.textGlad}>
          Glad you're
          <br />
          here! <br />
          Hope, you'll
          <br />
          enjoy!
        </Text>
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            textColor="white"
            // onPress={handleSubmit(onSubmit)}
          >
            let's start
          </Button>
        </View>
      </View>
      <FooterSvgComponent />
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 20,
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
  textGlad: {
    fontSize: 40,
    lineHeight: 60,
  },
  gladContainer: {
    alignItems: 'center',
  },
  buttonContainer: {
    paddingTop: 50,
  },
  button: {
    backgroundColor: '#FB8F67',
    borderRadius: 4,
  },
  imageTop: {
    width: '100%',
    height: 'auto',
  },
  imageBottom: {
    width: '100%',
    height: 'auto',
  },
})

export default GladScreen
