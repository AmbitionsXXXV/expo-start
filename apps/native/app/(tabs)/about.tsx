import LanguageSwitcher from '@/components/LanguageSwitcher'
import { useColorScheme } from '@/lib/use-color-scheme'
import * as Crypto from 'expo-crypto'
import * as DevClient from 'expo-dev-client'
import React, { useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { Button, StyleSheet, Text, View } from 'react-native'
import type { SizeTokens } from 'tamagui'
import { Label, RadioGroup, XStack, YStack } from 'tamagui'

export default function About() {
	const { setColorScheme, isDarkColorScheme } = useColorScheme()
	const { t } = useTranslation()

	useEffect(() => {
		;(async () => {
			const digest = await Crypto.digestStringAsync(
				Crypto.CryptoDigestAlgorithm.SHA256,
				'GitHub stars are neat 🌟',
			)
			console.log('Digest: ', digest)
			/* Some crypto operation... */
		})()
	}, [])

	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>{t('settings.language')}</Text>
				<LanguageSwitcher />
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>{t('settings.theme')}</Text>
				<Button
					title={
						isDarkColorScheme ? t('settings.lightTheme') : t('settings.darkTheme')
					}
					onPress={() => {
						if (isDarkColorScheme) {
							setColorScheme('light')
						} else {
							setColorScheme('dark')
						}
					}}
				/>
			</View>

			<View style={styles.section}>
				<Button
					title={t('settings.devMenu')}
					onPress={() => {
						DevClient.openMenu()
					}}
				/>
			</View>

			<RadioGroup aria-labelledby="Select one item" defaultValue="3" name="form">
				<YStack width={300} alignItems="center" gap="$2">
					<RadioGroupItemWithLabel size="$3" value="2" label="Second value" />
					<RadioGroupItemWithLabel size="$4" value="3" label="Third value" />
					<RadioGroupItemWithLabel size="$5" value="4" label="Fourth value" />
				</YStack>
			</RadioGroup>
		</View>
	)
}

export function RadioGroupItemWithLabel(props: {
	size: SizeTokens
	value: string
	label: string
}) {
	const id = `radiogroup-${props.value}`
	return (
		<XStack width={300} alignItems="center" gap="$4">
			<RadioGroup.Item value={props.value} id={id} size={props.size}>
				<RadioGroup.Indicator />
			</RadioGroup.Item>

			<Label size={props.size} htmlFor={id}>
				{props.label}
			</Label>
		</XStack>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 16,
	},
	section: {
		marginBottom: 24,
	},
	sectionTitle: {
		fontSize: 18,
		fontWeight: '600',
		marginBottom: 12,
		color: '#333',
	},
})
