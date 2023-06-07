import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { Link } from 'solito/link'

const MailOption = () => {
  return (
    <View style={styles.viewContainer}>
      <Link href="/registration/mail-sign">
        <Card style={styles.cardContainer}>
          <Card.Content>
            <Text variant="bodyMedium">e-mail</Text>
          </Card.Content>
        </Card>
      </Link>
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
