import Ionicons from "@expo/vector-icons/Ionicons";
import { Tabs } from "expo-router";
import { useTranslation } from "react-i18next";

export default function TabLayout() {
	const { t } = useTranslation();

	return (
		<Tabs
			screenOptions={{
				tabBarActiveTintColor: "#ffd33d",
			}}
		>
			<Tabs.Screen
				name="index"
				options={{
					title: t("tabs.home"),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "home-sharp" : "home-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="about"
				options={{
					title: t("tabs.about"),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={
								focused ? "information-circle" : "information-circle-outline"
							}
							color={color}
							size={24}
						/>
					),
				}}
			/>
			<Tabs.Screen
				name="health"
				options={{
					title: t("tabs.health"),
					tabBarIcon: ({ color, focused }) => (
						<Ionicons
							name={focused ? "heart-sharp" : "heart-outline"}
							color={color}
							size={24}
						/>
					),
				}}
			/>
		</Tabs>
	);
}
