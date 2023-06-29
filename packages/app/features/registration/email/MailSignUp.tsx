import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { useForm, Controller } from 'react-hook-form'
import { Button, Card, Text, TextInput } from 'react-native-paper'
import { mailAccountRegistration } from '../../../actions/registration/mail/mailRegistration'

const MailCreds = () => {
  const {
    handleSubmit,
    control,
    watch,
    formState: { errors, isValid },
  } = useForm({
    defaultValues: {
      login: '',
      password: '',
      morePassword: '',
    },
    mode: 'onBlur',
  })

  const patternNum = /\d+/
  const patternLetters = /\[a-zA-Z]+/
  const patternChars = /\[!@#$%^&*()]/
  const eightCharsMin = /\.{8,}/

  const validPass = watch('password')
  const containsNumbers = patternNum.test(validPass)
  const containsLetters = patternLetters.test(validPass)
  const containsChars = patternChars.test(validPass)
  const containsMinChars = eightCharsMin.test(validPass)

  const getDashOrCheck = (res: boolean) => {
    if (!res) {
      return '-'
    }
    return 'v'
  }

  const onSubmit = async ({ login, morePassword, password }: any) => {
    await mailAccountRegistration(password, morePassword, login)
  }
  console.log({ isValid })

  return (
    <View>
      <Text style={styles.labelText}>Login</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="login"
        rules={{
          required: true,
          pattern: {
            value:
              /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
            message: 'Invalid email address',
          },
        }}
      />
      {errors.login && (
        <Text style={styles.errorText}>{errors.login.message}</Text>
      )}
      <Text style={styles.labelText}>Password</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="password"
        rules={{
          required: true,
          // pattern: {
          //   value: /\d+/,
          //   message: 'Invalid password',
          // },
        }}
      />
      <Text style={styles.labelText}>One more time</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            style={styles.inputContainer}
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="morePassword"
        rules={{
          required: true,
          validate: (value) => {
            if (watch('password') !== value) {
              return 'Your passwords do no match'
            }
          },
        }}
      />
      {errors.morePassword && (
        <Text style={styles.errorText}>{errors.morePassword.message}</Text>
      )}
      <View style={styles.buttonContainer}>
        <Button
          style={styles.button}
          textColor="white"
          onPress={handleSubmit(onSubmit)}
          disabled={!isValid}
        >
          create
        </Button>
      </View>
      <Card style={styles.passValidationCard}>
        <Card.Content>
          <Text variant="bodyMedium">Your Password must have</Text>
          <View style={styles.passValidationItem}>
            <Text style={{ color: containsMinChars ? '#1D878C' : '#F46B5D' }}>
              {getDashOrCheck(containsMinChars)}
            </Text>
            <Text
              style={{ color: containsMinChars ? '#1D878C' : '#F46B5D' }}
              variant="bodyMedium"
            >
              8 or more letters
            </Text>
          </View>
          <View>
            <Text variant="bodyMedium">numbers</Text>
          </View>
          <View>
            <Text variant="bodyMedium">letters</Text>
          </View>
          <View>
            <Text variant="bodyMedium">special characters</Text>
          </View>
        </Card.Content>
      </Card>
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

export default MailCreds
