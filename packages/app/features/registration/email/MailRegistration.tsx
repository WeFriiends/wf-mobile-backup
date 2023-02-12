import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Avatar, Button, Card, Text } from 'react-native-paper'

const MailRegistration = () => {
  return (
    <View>
      <Card onPress={() => console.log('FB')} style={styles.cardContainer}>
        <Card.Content>
          <Text variant="bodyMedium">e-mail</Text>
        </Card.Content>
      </Card>
    </View>
  )
}

const styles = StyleSheet.create({
  cardContainer: {
    backgroundColor: '#FFF1EC',
  },
})

export default MailRegistration
