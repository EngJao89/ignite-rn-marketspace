import { StatusBar } from 'react-native'
import {
  useFonts,
  // eslint-disable-next-line camelcase
  Karla_400Regular,
  // eslint-disable-next-line camelcase
  Karla_700Bold,
} from '@expo-google-fonts/karla'

import { NativeBaseProvider } from 'native-base'
import { theme } from './src/theme'

import { Loading } from '@components/Loading'
import { Routes } from '@routes/index'

import { AuthContextProvider } from '@contexts/AuthContext'

export default function App() {
  // eslint-disable-next-line camelcase
  const [fontsLoaded] = useFonts({ Karla_400Regular, Karla_700Bold })

  return (
    <NativeBaseProvider theme={theme}>
      <StatusBar
        barStyle="dark-content"
        backgroundColor="transparent"
        translucent
      />
      <AuthContextProvider>
        {fontsLoaded ? <Routes /> : <Loading />}
      </AuthContextProvider>
    </NativeBaseProvider>
  )
}
