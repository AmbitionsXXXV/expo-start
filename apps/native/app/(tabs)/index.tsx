import Button from "@/components/Button";
import ImageViewer from "@/components/ImageViewer";
import { View } from "react-native";

export default function Home() {
	return (
		<View className="flex-1 items-center bg-[#25292e]">
			<View className="flex-1 pt-7">
				<ImageViewer
					imgSource={require("@/assets/images/background-image.png")}
				/>
			</View>
			<View className="flex-[1/3] items-center">
				<Button theme="primary" label="Choose a photo" />
				<Button label="Use this photo" />
			</View>
		</View>
	);
}
