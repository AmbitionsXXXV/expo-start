// -- 导入 FontAwesome 图标组件
import FontAwesome from "@expo/vector-icons/FontAwesome";
// -- 导入 React Native 组件
import { Pressable, StyleSheet } from "react-native";

// -- 定义 HeaderButton 组件，接收 onPress 属性
export function HeaderButton({ onPress }: { onPress?: () => void }) {
	return (
		<Pressable onPress={onPress}>
			{({ pressed }) => (
				<FontAwesome
					name="info-circle"
					size={25}
					color="gray"
					style={[
						styles.headerRight,
						{
							opacity: pressed ? 0.5 : 1,
						},
					]}
				/>
			)}
		</Pressable>
	);
}

// -- 定义样式
export const styles = StyleSheet.create({
	headerRight: {
		marginRight: 15,
	},
});
