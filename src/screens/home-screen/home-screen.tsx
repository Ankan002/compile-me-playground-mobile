import { SafeAreaView } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useThemeStore } from "@/src/store";
import { HomeHeader } from "@/src/components/home-header";

const HomeScreen = () => {
	const { theme } = useThemeStore();

	return (
		<SafeAreaView
			style={
				theme === "dark" ? darkStyles.Container : lightStyles.Container
			}
		>
			<HomeHeader />
			<StatusBar style={theme === "dark" ? "light" : "dark"} />
		</SafeAreaView>
	);
};

export default HomeScreen;
