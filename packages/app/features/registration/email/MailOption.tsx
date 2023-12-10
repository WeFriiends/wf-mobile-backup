import { Card, Text } from 'react-native-paper'

import { FC } from 'react'
import { Link } from 'solito/link'
import { StyleSheet } from 'react-native'
import { View } from 'dripsy'

type MailOptionProps = {
  signOption?: string
}

//`/registration/${path}`
const MailOption: FC<MailOptionProps> = ({ signOption }) => {
  console.log({ mail: signOption })
  const path = signOption ? 'mail-sign-in' : 'mail-sign-up'
  return (
    <View style={styles.viewContainer}>
      <Link href={`registration/${path}`}>
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
