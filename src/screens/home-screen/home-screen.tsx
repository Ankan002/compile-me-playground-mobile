import { SafeAreaView, Text } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useThemeStore } from "@/src/store";

const HomeScreen = () => {
	const { theme } = useThemeStore();

	return (
		<SafeAreaView
			style={
				theme === "dark" ? darkStyles.Container : lightStyles.Container
			}
		>
			<Text style={theme === "dark" ? darkStyles.Text : lightStyles.Text}>
				Home Screen
			</Text>
			<StatusBar style={theme === "dark" ? "light" : "dark"} />
		</SafeAreaView>
	);
};

export default HomeScreen;
