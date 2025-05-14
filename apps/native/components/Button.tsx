import FontAwesome from "@expo/vector-icons/FontAwesome";
import { Pressable, Text, View } from "react-native";

type Props = {
	label: string;
	theme?: "primary";
};

export default function Button({ label, theme }: Props) {
	if (theme === "primary") {
		return (
			<View className="mx-5 h-[68px] w-80 items-center justify-center rounded-2xl border-4 border-yellow-300 p-[3px]">
				<Pressable
					className="size-full flex-row items-center justify-center rounded-[10px] bg-white"
					onPress={() => alert("You pressed a button.")}
				>
					<FontAwesome
						name="picture-o"
						size={18}
						color="#25292e"
						className="pr-2"
					/>
					<Text className="text-[#25292e] text-[16px]">{label}</Text>
				</Pressable>
			</View>
		);
	}

	return (
		<View className="mx-5 h-[68px] w-80 items-center justify-center p-[3px]">
			<Pressable
				className="size-full flex-row items-center justify-center rounded-[10px]"
				onPress={() => alert("You pressed a button.")}
			>
				<Text className="text-[16px] text-white">{label}</Text>
			</Pressable>
		</View>
	);
}
