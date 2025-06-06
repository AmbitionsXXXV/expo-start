import { setAndroidNavigationBar } from '@/lib/android-navigation-bar'
import { NAV_THEME } from '@/lib/constants'
import { useColorScheme } from '@/lib/use-color-scheme'
import { queryClient } from '@/utils/trpc'
import {
	DarkTheme,
	DefaultTheme,
	type Theme,
	ThemeProvider,
} from '@react-navigation/native'
import { QueryClientProvider } from '@tanstack/react-query'
import { Stack } from 'expo-router'
import { StatusBar } from 'expo-status-bar'
import React, { useRef } from 'react'
import { I18nextProvider } from 'react-i18next'
import { Platform } from 'react-native'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { LanguageProvider } from '../contexts/LanguageContext'
import '../global.css'
import tamaguiConfig from '@/tamagui.config'
import { TamaguiProvider } from 'tamagui'
import i18n from '../i18n'

const LIGHT_THEME: Theme = {
	...DefaultTheme,
	colors: NAV_THEME.light,
}
const DARK_THEME: Theme = {
	...DarkTheme,
	colors: NAV_THEME.dark,
}

export const unstable_settings = {
	initialRouteName: '(tabs)',
}

export default function RootLayout() {
	const hasMounted = useRef(false)
	const { colorScheme, isDarkColorScheme } = useColorScheme()
	const [isColorSchemeLoaded, setIsColorSchemeLoaded] = React.useState(false)

	useIsomorphicLayoutEffect(() => {
		if (hasMounted.current) {
			return
		}

		if (Platform.OS === 'web') {
			document.documentElement.classList.add('bg-background')
		}
		setAndroidNavigationBar(colorScheme)
		setIsColorSchemeLoaded(true)
		hasMounted.current = true
	}, [])

	if (!isColorSchemeLoaded) {
		return null
	}
	return (
		<TamaguiProvider config={tamaguiConfig}>
			<QueryClientProvider client={queryClient}>
				<ThemeProvider value={isDarkColorScheme ? DARK_THEME : LIGHT_THEME}>
					<I18nextProvider i18n={i18n}>
						<LanguageProvider>
							<StatusBar style={isDarkColorScheme ? 'light' : 'dark'} />
							<GestureHandlerRootView style={{ flex: 1 }}>
								<Stack>
									<Stack.Screen name="(tabs)" options={{ headerShown: false }} />
									<Stack.Screen name="+not-found" options={{ title: 'Oops!' }} />
								</Stack>
							</GestureHandlerRootView>
						</LanguageProvider>
					</I18nextProvider>
				</ThemeProvider>
			</QueryClientProvider>
		</TamaguiProvider>
	)
}

const useIsomorphicLayoutEffect =
	Platform.OS === 'web' && typeof window === 'undefined'
		? React.useEffect
		: React.useLayoutEffect
