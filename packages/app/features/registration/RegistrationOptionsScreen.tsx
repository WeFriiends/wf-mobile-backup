import { Button, Text } from 'react-native-paper'
import { Link, TextLink } from 'solito/link'
import { useEffect, useState } from 'react'

import FbOption from './fb/FbOption'
import GoogleOption from './google/GoogleOption'
import LogoComponent from 'app/components/LogoComponent'
import MailOption from './email/MailOption'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import RegistrationOptionsFooter from './RegistrationOptionsFooter'
import RegistrationOptionsHeader from './RegistrationOptionsHeader'
import { RootStackParamList } from 'app/navigation/native'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { createParam } from 'solito'
import { useRouter } from 'solito/router'

const RegistrationOptionsScreen = () => {
  const { push, back } = useRouter()
  const [signOption, setSignOption] = useState<string | undefined>(undefined)

  const onPressSignIn = () => {
    setSignOption('signIn')
    push('signIn')
  }
  const onPressBackSignUp = () => {
    setSignOption(undefined)
    back()
  }
  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
        alignItems: 'center',
      }}
    >
      <LogoComponent />
      <View style={styles.registrationContainer}>
        <RegistrationOptionsHeader signOption={signOption} />
        <View>
          {/* <FbOption />
          <GoogleOption /> */}
          <MailOption signOption={signOption} />
        </View>
        <RegistrationOptionsFooter
          signOption={signOption}
          onPressSignIn={onPressSignIn}
          onPressBackSignUp={onPressBackSignUp}
        />
      </View>
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
  signContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  emptyContainer: {
    minHeight: '15%',
    maxHeight: '30%',
  },
  signText: {
    color: '#1D878C',
  },
})

export default RegistrationOptionsScreen
