import { useLanguage } from "@/contexts/LanguageContext";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";

const LanguageSwitcher: React.FC = () => {
	const { locale, setLocale, availableLocales } = useLanguage();

	return (
		<View style={styles.container}>
			{availableLocales.map(({ code, name }) => (
				<TouchableOpacity
					key={code}
					style={[styles.button, locale === code && styles.activeButton]}
					onPress={() => setLocale(code)}
				>
					<Text style={[styles.text, locale === code && styles.activeText]}>
						{name}
					</Text>
				</TouchableOpacity>
			))}
		</View>
	);
};

const styles = StyleSheet.create({
	container: {
		flexDirection: "row",
		justifyContent: "center",
		alignItems: "center",
		padding: 10,
		backgroundColor: "#f5f5f5",
		borderRadius: 20,
		marginVertical: 10,
	},
	button: {
		paddingHorizontal: 12,
		paddingVertical: 6,
		borderRadius: 15,
		marginHorizontal: 4,
	},
	activeButton: {
		backgroundColor: "#007AFF",
	},
	text: {
		color: "#666",
		fontSize: 14,
	},
	activeText: {
		color: "white",
		fontWeight: "bold",
	},
});

export default LanguageSwitcher;
