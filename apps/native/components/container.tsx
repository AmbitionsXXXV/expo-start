import { SafeAreaView } from "react-native";

/**
 * 容器组件 - 提供基础布局容器
 * @param children - 子组件，使用 ReactNode 类型接收任意有效的 React 子元素
 * @returns 返回一个带有安全区域适配的容器组件
 *
 * 使用说明：
 * - 作为页面根容器使用，会自动处理 iOS 设备的安全区域
 * - 默认样式：flex 布局、占满剩余空间、背景色为 theme 中定义的 background 颜色、四周内边距 4
 * - 在 Android 上 SafeAreaView 会自动退化为普通 View
 */
export const Container = ({ children }: { children: React.ReactNode }) => {
	return (
		// 使用 SafeAreaView 确保内容不会被设备刘海、圆角等遮挡
		// className 中的样式说明：
		// - flex: 使用弹性布局
		// - flex-1: 占满父容器剩余空间
		// - bg-background: 使用主题中定义的背景色
		// - p-4: 四周添加 16px 的内边距
		<SafeAreaView className="flex flex-1 bg-background p-4">
			{children}
		</SafeAreaView>
	);
};
