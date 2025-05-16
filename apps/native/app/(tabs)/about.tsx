import LanguageSwitcher from "@/components/LanguageSwitcher";
import { useColorScheme } from "@/lib/use-color-scheme";
import * as Crypto from "expo-crypto";
import * as DevClient from "expo-dev-client";
import { useEffect } from "react";
import { useTranslation } from "react-i18next";
import { Button, StyleSheet, Text, View } from "react-native";

export default function About() {
	const { setColorScheme, isDarkColorScheme } = useColorScheme();
	const { t } = useTranslation();

	useEffect(() => {
		(async () => {
			const digest = await Crypto.digestStringAsync(
				Crypto.CryptoDigestAlgorithm.SHA256,
				"GitHub stars are neat 🌟",
			);
			console.log("Digest: ", digest);
			/* Some crypto operation... */
		})();
	}, []);

	return (
		<View style={styles.container}>
			<View style={styles.section}>
				<Text style={styles.sectionTitle}>{t("settings.language")}</Text>
				<LanguageSwitcher />
			</View>

			<View style={styles.section}>
				<Text style={styles.sectionTitle}>{t("settings.theme")}</Text>
				<Button
					title={
						isDarkColorScheme
							? t("settings.lightTheme")
							: t("settings.darkTheme")
					}
					onPress={() => {
						if (isDarkColorScheme) {
							setColorScheme("light");
						} else {
							setColorScheme("dark");
						}
					}}
				/>
			</View>

			<View style={styles.section}>
				<Button
					title={t("settings.devMenu")}
					onPress={() => {
						DevClient.openMenu();
					}}
				/>
			</View>
		</View>
	);
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
		fontWeight: "600",
		marginBottom: 12,
		color: "#333",
	},
});
