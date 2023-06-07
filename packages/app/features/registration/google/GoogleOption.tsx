import { StyleSheet } from 'react-native'
import { View } from 'dripsy'
import { Avatar, Button, Card, Text } from 'react-native-paper'
import { SolitoImage } from 'solito/image'
import { Link } from 'solito/link'
import { baseUrl } from 'app/actions/constants'

const GoogleOption = () => {
  return (
    <View style={styles.viewContainer}>
      <Link href={`${baseUrl}/api/auth/google`}>
        <Card style={styles.cardContainer}>
          <Card.Content style={styles.cardContent}>
            <Avatar.Image
              style={styles.image}
              size={24}
              source={require('../../../public/google.png')}
            />
            {/* <SolitoImage
            src="../../../public/google.png"
            height={100}
            width={100}
            alt="A cool artist's image."
            style={undefined}
            resizeMode={undefined}
          /> */}
            <Text variant="bodyMedium">Google</Text>
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
