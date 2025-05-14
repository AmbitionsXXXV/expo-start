import MaterialIcons from "@expo/vector-icons/MaterialIcons";
import { Pressable, View } from "react-native";

type Props = {
	onPress: () => void;
};

export default function CircleButton({ onPress }: Props) {
	return (
		<View className="mx-[60px] size-[84px] rounded-[42px] border-4 border-[#ffd33d] p-[3px]">
			<Pressable
				className="flex-1 items-center justify-center rounded-[42px] bg-white"
				onPress={onPress}
			>
				<MaterialIcons name="add" size={38} color="#25292e" />
			</Pressable>
		</View>
	);
}
