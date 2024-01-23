import { DefaultTheme, Provider as PaperProvider } from 'react-native-paper'

import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { UserProvider } from 'app/context/login/UserContext'

import PrevStepButton from 'app/components/ui/PreviousStepButton'
import NextStepButton from 'app/components/ui/NextStepButton'
import { ForceTouchGesture } from 'react-native-gesture-handler/lib/typescript/handlers/gestures/forceTouchGesture'



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
        <PrevStepButton />
        <NextStepButton />
      </PaperProvider>

      {/* </UserProvider> */}
    </Provider>
  )
}
