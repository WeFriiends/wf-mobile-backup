import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { useRouter } from 'solito/router'
import { useForm, Controller } from 'react-hook-form'
import { Button, Card, Text, TextInput } from 'react-native-paper'
import { mailSignIn } from '../../auth/AuthService'

const id = 1
const MailSignIn = () => {
  const { push } = useRouter()

  const [login, setLogin] = useState('')
  const [pass, setPass] = useState('')
  const [loginValid, setLoginValid] = useState(false)
  const [isVisible, setVisible] = useState(false)

  const icon = isVisible ? 'eye' : 'eye-off'

  const onSubmit = async () => {
    await mailSignIn(login, pass)
    push(`user/${id}`)
  }
  const isValid = login && pass
  return (
    <View style={styles.mailSignContainer}>
      <Text style={styles.labelText}>Login</Text>
      <TextInput
        style={styles.inputContainer}
        // onBlur={onBlur}
        onChangeText={(value) => setLogin(value)}
        value={login}
      />
      <Text style={styles.labelText}>Password</Text>
      <TextInput
        style={styles.inputContainer}
        // onBlur={onBlur}
        onChangeText={(value) => setPass(value)}
        value={pass}
        secureTextEntry={!isVisible}
        right={
          <TextInput.Icon onPress={() => setVisible(!isVisible)} icon={icon} />
        }
      />

      {/* {errors.login && (
        <Text style={styles.errorText}>{errors.login.message}</Text>
      )} */}
      <Text style={styles.labelText}>Forgot password?</Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          textColor="white"
          // onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          sign in
        </Button>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  mailSignContainer: {
    display: 'flex',
    justifyContent: 'center',
  },
  inputContainer: {
    backgroundColor: '#FFF1EC',
    borderRadius: 4,
  },
  labelText: {
    paddingBottom: 5,
    paddingTop: 20,
  },
  buttonContainer: {
    paddingTop: 42,
  },
  button: {
    backgroundColor: '#FB8F67',
    borderRadius: 4,
  },
  errorText: {
    color: 'red',
  },
  passValidationItem: {
    display: 'flex',
    flexDirection: 'row',
  },
  passValidationCard: {
    marginTop: 10,
    backgroundColor: '#fffff',
  },
})

export default MailSignIn
