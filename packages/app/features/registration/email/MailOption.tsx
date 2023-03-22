import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { TextLink } from 'solito/link'
import { googleSignIn } from '../../../actions/registration/fetchGoogleAcc'

const MailOption = () => {
  return (
    <View style={styles.viewContainer}>
      <Card style={styles.cardContainer}>
        <Card.Content>
          <TextLink href="/registration/mail-sign">
            <Text variant="bodyMedium">e-mail</Text>
          </TextLink>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  viewContainer: {
    paddingBottom: 20,
  },
  cardContainer: {
    backgroundColor: '#FFF1EC',
    boxShadow: 'none',
    alignItems: 'center',
    cursor: 'pointer',
  },
})

export default MailOption
