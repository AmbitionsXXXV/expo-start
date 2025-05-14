import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, Text } from "react-native";

type Props = {
	icon: keyof typeof MaterialIcons.glyphMap;
	label: string;
	onPress: () => void;
};

export default function IconButton({ icon, label, onPress }: Props) {
	return (
		<Pressable onPress={onPress} className="items-center justify-center">
			<MaterialIcons name={icon} size={24} color="#fff" />
			<Text className="mt-3 text-white">{label}</Text>
		</Pressable>
	);
}
