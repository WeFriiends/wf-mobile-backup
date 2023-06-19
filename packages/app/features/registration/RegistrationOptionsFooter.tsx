import { FC } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Link, TextLink } from 'solito/link'

import { Text, Button } from 'react-native-paper'
import SignInFooter from './SignInFooter'
import SignUpFooter from './SignUpFooter'

type RegistrationOptionsFooterProps = {
  signOption?: string
  navigation: any
}
// type RegistrationOptionsProps = NativeStackScreenProps<RootStackParamList>

const RegistrationOptionsFooter: FC<RegistrationOptionsFooterProps> = ({
  signOption,
  navigation,
}) => {
  console.log({ footer: signOption })

  const buttonText = signOption ? 'Sign In' : 'Sign Up'
  const path = signOption ? 'mail-sing-in' : 'mail-sign-up'

  return (
    <>
      {signOption ? <SignInFooter /> : <SignUpFooter />}
      {/* <Button
        mode="text"
        onPress={() => {
          navigation.navigate(`registration/${path}`)
          // if (signOption === 'signOption In') {
          //   setSignOption('Sign Up')
          // }
        }}
      >
        {buttonText}
      </Button> */}
      <Link href={`/registration/${path}`}>
        <Text style={styles.signText} variant="titleLarge">
          {buttonText}
        </Text>
      </Link>
    </>
  )
}

const styles = StyleSheet.create({
  textBlock: {
    display: 'flex',
    alignItems: 'center',
    paddingBottom: 50,
  },
  coloredText: {
    color: '#F46B5D',
    fontWeight: '600',
    lineHeight: 40,
    fontSize: 32,
  },
  signText: {
    color: '#1D878C',
  },
})

export default RegistrationOptionsFooter
