import * as Localization from "expo-localization";
import i18n, { type InitOptions } from "i18next";
import { initReactI18next } from "react-i18next";
import en from "./locales/en.json";
import ja from "./locales/ja.json";
import zh from "./locales/zh.json";

// Get device language
const deviceLanguage = Localization.getLocales()[0]?.languageCode || "en";

// i18n configuration
const i18nConfig: InitOptions = {
	resources: {
		en: { translation: en },
		zh: { translation: zh },
		ja: { translation: ja },
	},
	lng: deviceLanguage, // Use device language
	fallbackLng: "en", // Fallback to English if translation is missing
	interpolation: {
		escapeValue: false, // React Native already escapes values
	},
	// @ts-ignore - compatibilityJSON is not in the type definition but needed for React Native
	compatibilityJSON: "v3", // For React Native compatibility
};

// Initialize i18next
i18n
	.use(initReactI18next) // Passes i18n down to react-i18next
	.init(i18nConfig);

export default i18n;
