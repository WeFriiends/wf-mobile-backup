import { NativeNavigation } from 'app/navigation/native'
import { Provider } from 'app/provider'
import { Provider as PaperProvider } from 'react-native-paper'

export default function App() {
  return (
    <PaperProvider>
      <Provider>
        <NativeNavigation />
      </Provider>
    </PaperProvider>
  )
}
