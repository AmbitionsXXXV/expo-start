import { useColorScheme } from "@/lib/use-color-scheme";
import { Button } from "react-native";

export default function About() {
	const { setColorScheme, isDarkColorScheme } = useColorScheme();

	return (
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
	);
}
