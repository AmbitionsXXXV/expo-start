import type { ExpoConfig } from "expo/config";

export default {
	expo: {
		name: "my-better-t-app",
		slug: "my-better-t-app",
		version: "1.0.0",
		scheme: "my-better-t-app",
		web: {
			bundler: "metro",
			output: "static",
			favicon: "./assets/images/favicon.png",
		},
		plugins: [
			"expo-router",
			"expo-secure-store",
			"expo-web-browser",
			[
				"expo-splash-screen",
				{
					image: "./assets/images/splash-icon.png",
				},
			],
			[
				"expo-dev-client",
				{
					launchMode: "most-recent",
				},
			],
		],
		experiments: {
			typedRoutes: true,
			tsconfigPaths: true,
		},
		newArchEnabled: true,
		orientation: "portrait",
		icon: "./assets/images/icon.png",
		userInterfaceStyle: "automatic",
		splash: {
			image: "./assets/images/splash.png",
			resizeMode: "contain",
			backgroundColor: "#ffffff",
		},
		assetBundlePatterns: ["**/*"],
		ios: {
			supportsTablet: true,
			bundleIdentifier: "com.amanvarshney01.mybettertapp",
		},
		android: {
			adaptiveIcon: {
				foregroundImage: "./assets/images/adaptive-icon.png",
				backgroundColor: "#ffffff",
			},
			package: "com.amanvarshney01.mybettertapp",
			edgeToEdgeEnabled: true,
		},
	},
} as { expo: ExpoConfig };
