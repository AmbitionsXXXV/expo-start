import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import * as ImagePicker from "expo-image-picker";
import { useState } from "react";
import { View } from "react-native";

export default function Home() {
	const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);

	const pickImageAsync = async () => {
		const result = await ImagePicker.launchImageLibraryAsync({
			mediaTypes: ["images"],
			allowsEditing: true,
			quality: 1,
		});

		if (!result.canceled) {
			setSelectedImg(result.assets[0].uri);
		} else {
			alert("You did not select any image.");
		}
	};

	return (
		<View className="flex-1 items-center bg-[#25292e]">
			<View className="flex-1 pt-7">
				<ImageViewer
					imgSource={require("@/assets/images/background-image.png")}
					selectedImage={selectedImg}
				/>
			</View>
			<View className="flex-[1/3] items-center">
				<Button
					theme="primary"
					label="Choose a photo"
					onPress={pickImageAsync}
				/>
				<Button label="Use this photo" />
			</View>
		</View>
	);
}
