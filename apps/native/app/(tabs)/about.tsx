import { useColorScheme } from "@/lib/use-color-scheme";
import { useEffect } from "react";
import { Button, View } from "react-native";

import * as Crypto from "expo-crypto";
import * as DevClient from "expo-dev-client";

export default function About() {
	const { setColorScheme, isDarkColorScheme } = useColorScheme();

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
		<View className="flex gap-4">
			<Button
				title={isDarkColorScheme ? "Set to light" : "Set to dark"}
				onPress={() => {
					if (isDarkColorScheme) {
						setColorScheme("light");
					} else {
						setColorScheme("dark");
					}
				}}
			/>

			<Button
				title="Dev menu"
				onPress={() => {
					DevClient.openMenu();
				}}
			/>
		</View>
	);
}
