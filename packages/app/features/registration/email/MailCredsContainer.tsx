import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import Logo from 'app/components/Logo'
import { Text } from 'react-native-paper'
import MailCreds from './MailCreds'

const MailCredsContainer = () => {
  return (
    <View>
      <View style={styles.logoView}>
        <Logo />
      </View>
      <View style={styles.registrationContainer}>
        <View style={styles.textBlock}>
          <Text style={styles.coloredText}>Enter e-mail</Text>
        </View>
        <MailCreds />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 10,
  },
  textBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 20,
  },
  coloredText: {
    color: '#F46B5D',
    fontWeight: '600',
    lineHeight: 40,
    fontSize: 32,
  },
  logoView: {
    height: 80,
    marginTop: 30,
    overflow: 'hidden',
  },
})

export default MailCredsContainer
