import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const MailRegistration = () => {
  return (
    <View style={styles.viewContainer}>
      <Card onPress={() => console.log('mail')} style={styles.cardContainer}>
        <Card.Content>
          <Text variant="bodyMedium">e-mail</Text>
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
  },
})

export default MailRegistration
