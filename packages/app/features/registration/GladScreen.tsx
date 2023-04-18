import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { SolitoImage } from 'solito/image'
import Logo from 'app/components/Logo'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'

const GladScreen = () => {
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <SolitoImage
        src="/account-header.svg"
        height={100}
        width={100}
        alt=""
        style={styles.imageTop}
        resizeMode={'cover'}
      />
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
      <SolitoImage
        src="/account-footer.svg"
        height={150}
        width={400}
        alt=""
        style={styles.imageBottom}
        resizeMode={'cover'}
      />
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
