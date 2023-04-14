import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Provider as PaperProvider, DefaultTheme } from 'react-native-paper'

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
  },
}

export default function App() {
  return (
    <Provider>
      <PaperProvider theme={theme}>
        <NativeNavigation />
      </PaperProvider>
    </Provider>
  )
}
