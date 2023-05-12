import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { googleSignIn } from '../../../actions/registration/fetchGoogleAcc'

const GoogleOption = () => {
  return (
    <View style={styles.viewContainer}>
      <Card onPress={googleSignIn} style={styles.cardContainer}>
        <Card.Content style={styles.cardContent}>
          <Avatar.Image
            style={styles.image}
            size={24}
            source={require('public/google.png')}
          />
          <Text variant="bodyMedium">Google</Text>
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
  cardContent: {
    display: 'flex',
    flexDirection: 'row',
  },
  image: {
    marginRight: 5,
    backgroundColor: 'unset',
  },
})

export default GoogleOption