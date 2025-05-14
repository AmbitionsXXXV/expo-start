import * as ImagePicker from "expo-image-picker";
import * as MediaLibrary from "expo-media-library";

import { useRef, useState } from "react";
import { type ImageSourcePropType, View } from "react-native";
import { captureRef } from "react-native-view-shot";

import PlaceholderImage from "@/assets/images/background-image.png";
import Button from "@/components/Button";
import CircleButton from "@/components/CircleButton";
import EmojiList from "@/components/EmojiList";
import EmojiPicker from "@/components/EmojiPicker";
import EmojiSticker from "@/components/EmojiSticker";
import IconButton from "@/components/IconButton";
import ImageViewer from "@/components/ImageViewer";

export default function Home() {
	const [selectedImg, setSelectedImg] = useState<string | undefined>(undefined);
	const [showAppOptions, setShowAppOptions] = useState<boolean>(false);
	const [isModalVisible, setIsModalVisible] = useState<boolean>(false);
	const [pickedEmoji, setPickedEmoji] = useState<
		ImageSourcePropType | undefined
	>(undefined);
	const [status, requestPermission] = MediaLibrary.usePermissions();
	const imageRef = useRef<View>(null);

	if (status === null) {
		requestPermission();
	}

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

	const onReset = () => {
		setShowAppOptions(false);
	};

	const onAddSticker = () => {
		setIsModalVisible(true);
	};

	const onModalClose = () => {
		setIsModalVisible(false);
	};

	const onSaveImageAsync = async () => {
		try {
			const localUri = await captureRef(imageRef, {
				height: 440,
				quality: 1,
			});

			await MediaLibrary.saveToLibraryAsync(localUri);
			if (localUri) {
				alert("Saved!");
			}
		} catch (e) {
			console.log(e);
		}
	};

	return (
		<View className="flex-1 items-center bg-[#25292e]">
			<View className="flex-1 pt-7">
				<View ref={imageRef} collapsable={false}>
					<ImageViewer
						imgSource={PlaceholderImage}
						selectedImage={selectedImg}
					/>
					{pickedEmoji && (
						<EmojiSticker imageSize={40} stickerSource={pickedEmoji} />
					)}
				</View>
			</View>
			{showAppOptions ? (
				<View className="absolute bottom-20">
					<View className="flex-row items-center">
						<IconButton icon="refresh" label="Reset" onPress={onReset} />
						<CircleButton onPress={onAddSticker} />
						<IconButton
							icon="save-alt"
							label="Save"
							onPress={onSaveImageAsync}
						/>
					</View>
				</View>
			) : (
				<View className="flex-[1/3] items-center">
					<Button
						theme="primary"
						label="Choose a photo"
						onPress={pickImageAsync}
					/>
					<Button
						label="Use this photo"
						onPress={() => setShowAppOptions(true)}
					/>
				</View>
			)}
			<EmojiPicker isVisible={isModalVisible} onClose={onModalClose}>
				<EmojiList onSelect={setPickedEmoji} onCloseModal={onModalClose} />
			</EmojiPicker>
		</View>
	);
}
