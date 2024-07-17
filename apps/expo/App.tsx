import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { UserProvider } from 'app/context/login/UserContext'
import PreviousStepButton from '../../packages/app/components/ui/PreviousStepButton'
import NextStepButton from '../../packages/app/components/ui/NextStepButton'


const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

export default function App() {
  return (
    <Provider>
      {/* <UserProvider> */}

      <PaperProvider theme={theme}>
        <NativeNavigation />
        <NextStepButton />
        <PreviousStepButton />
      </PaperProvider>

      {/* </UserProvider> */}
    </Provider>
  )
}