import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Text, Button } from 'react-native-paper'

const SignInFooter = () => {
  return (
    <>
      <View>
        <Text variant="titleMedium">
          By creating an account, I agree with The Terms of Service and Privacy
          Policy
        </Text>
      </View>
      <View style={styles.emptyContainer}></View>
      <View style={styles.signContainer}>
        <Text variant="titleLarge">Already have an account</Text>
      </View>
    </>
  )
}

const styles = StyleSheet.create({
  signContainer: {
    display: 'flex',
    alignItems: 'center',
  },
  emptyContainer: {
    minHeight: '15%',
    maxHeight: '30%',
  },
})

export default SignInFooter
