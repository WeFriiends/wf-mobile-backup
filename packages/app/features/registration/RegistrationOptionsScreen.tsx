import { useEffect, useState } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Link, TextLink } from 'solito/link'
import { createParam } from 'solito'
import { Text, Button } from 'react-native-paper'
import FbOption from './fb/FbOption'
import GoogleOption from './google/GoogleOption'
import MailOption from './email/MailOption'
import { RootStackParamList } from 'app/navigation/native'
import LogoComponent from 'app/components/LogoComponent'
import RegistrationOptionsHeader from './RegistrationOptionsHeader'
import RegistrationOptionsFooter from './RegistrationOptionsFooter'

type RegistrationOptionsProps = NativeStackScreenProps<RootStackParamList>
type SignQuery = {
  signOption: string | undefined
}

const RegistrationOptionsScreen = ({
  route,
  navigation,
}: RegistrationOptionsProps) => {
  const { useParam } = createParam<SignQuery>()
  const [signOption, setSignOption] = useParam('signOption')
  // const [sign, setSign] = useState('Sign In')

  return (
    <View
      style={{
        backgroundColor: 'white',
        flex: 1,
      }}
    >
      <LogoComponent />
      <View style={styles.registrationContainer}>
        <RegistrationOptionsHeader signOption={signOption} />
        <View>
          <FbOption />
          <GoogleOption />
          <MailOption signOption={signOption} />
        </View>
        <RegistrationOptionsFooter
          signOption={signOption}
          navigation={navigation}
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
