import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { useForm, Controller } from 'react-hook-form'
import Logo from 'app/components/Logo'
import { Avatar, Button, Card, Text, TextInput } from 'react-native-paper'

import { createParam } from 'solito'

const MailCreds = () => {
  const { register, handleSubmit, control } = useForm()
  const onSubmit = (data) => console.log(data)
  return (
    <View>
      <Text style={styles.coloredText} variant="headlineMedium">
        Enter e-mail
      </Text>
      <Text>Login</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            // style={styles.input}
            // label="Login"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="login"
        rules={{ required: true }}
      />
      <Text>Passwort</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            // style={styles.input}
            // label="Passwort"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="passwort"
        rules={{ required: true }}
      />
      <Text>One more time</Text>
      <Controller
        control={control}
        render={({ field: { onChange, onBlur, value } }) => (
          <TextInput
            // style={styles.input}
            // label="One more time"
            onBlur={onBlur}
            onChangeText={(value) => onChange(value)}
            value={value}
          />
        )}
        name="morePasswort"
        rules={{ required: true }}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  registrationContainer: {
    margin: 20,
    display: 'flex',
    alignItems: 'center',
  },
  coloredText: {
    color: '#F46B5D',
  },
})

export default MailCreds
