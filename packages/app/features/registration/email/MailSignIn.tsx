import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { useForm, Controller } from 'react-hook-form'
import { Button, Card, Text, TextInput } from 'react-native-paper'
import { mailAccountRegistration } from '../../../actions/registration/mail/mailRegistration'

const MailSignIn = () => {
  // const onSubmit = async ({ login, morePassword, password }) => {
  //   await mailAccountRegistration(password, morePassword, login)
  // }

  return (
    <View>
      Hello
      {/* <Text style={styles.labelText}>Login</Text>
      <TextInput
        style={styles.inputContainer}
        onBlur={onBlur}
        onChangeText={(value) => onChange(value)}
        value={value}
      />
      <Text style={styles.labelText}>Password</Text>
      <TextInput
        style={styles.inputContainer}
        onBlur={onBlur}
        onChangeText={(value) => onChange(value)}
        value={value}
      />

      {errors.login && (
        <Text style={styles.errorText}>{errors.login.message}</Text>
      )}
      <Text style={styles.labelText}>Forgot password?</Text>

      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          textColor="white"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          sign in
        </Button>
      </View> */}
    </View>
  )
}

const styles = StyleSheet.create({
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
