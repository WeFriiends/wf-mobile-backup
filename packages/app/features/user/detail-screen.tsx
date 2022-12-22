import { Text, View } from 'dripsy'

import { TextLink } from 'solito/link'
import { createParam } from 'solito'

const { useParam } = createParam<{ id: string }>()

export function UserDetailScreen() {
    const [id] = useParam('id');

    return (
        <View sx={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
            <Text
                sx={{ textAlign: 'center', mb: 16, fontWeight: 'bold' }}
            >
                {`User ID: ${id}`}
            </Text>

      <TextLink href="/">👈 Go Home</TextLink>
      <TextLink href="/user-profile">👈 Go to Profile</TextLink>
    </View>
  )
}
