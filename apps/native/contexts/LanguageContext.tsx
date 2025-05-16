import i18n from "@/i18n";
import * as Localization from "expo-localization";
import type React from "react";
import { createContext, useContext, useEffect, useState } from "react";

type LanguageContextType = {
	locale: string;
	setLocale: (locale: string) => void;
	availableLocales: { code: string; name: string }[];
};

const LanguageContext = createContext<LanguageContextType | undefined>(
	undefined,
);

export const LanguageProvider: React.FC<{ children: React.ReactNode }> = ({
	children,
}) => {
	const [locale, setLocaleState] = useState(i18n.language);

	// 可用的语言列表
	const availableLocales = [
		{ code: "en", name: "English" },
		{ code: "zh", name: "中文" },
		{ code: "ja", name: "日本語" },
	];

	// 修改语言
	const setLocale = (newLocale: string) => {
		i18n.changeLanguage(newLocale);
		setLocaleState(newLocale);
	};

	// 初始化时使用设备的语言设置
	useEffect(() => {
		const deviceLanguage = Localization.getLocales()[0]?.languageCode || "en";
		// 如果设备的语言在支持的语言列表中，则使用设备语言
		if (availableLocales.some((lang) => lang.code === deviceLanguage)) {
			setLocale(deviceLanguage);
		}
	}, []);

	return (
		<LanguageContext.Provider value={{ locale, setLocale, availableLocales }}>
			{children}
		</LanguageContext.Provider>
	);
};

export const useLanguage = (): LanguageContextType => {
	const context = useContext(LanguageContext);
	if (!context) {
		throw new Error("useLanguage must be used within a LanguageProvider");
	}
	return context;
};
