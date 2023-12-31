import { SafeAreaView, View } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useThemeStore } from "@/src/store";
import { HomeHeader } from "@/src/components/home-header";
import { CustomCodeEditor } from "@/src/components/custom-code-editor";

const HomeScreen = () => {
	const { theme } = useThemeStore();

	return (
		<SafeAreaView
			style={
				theme === "dark" ? darkStyles.Container : lightStyles.Container
			}
		>
			<HomeHeader />
			<View
				style={
					theme === "dark"
						? darkStyles.CodeEditorContainer
						: lightStyles.CodeEditorContainer
				}
			>
				<CustomCodeEditor />
			</View>
			<StatusBar style={theme === "dark" ? "light" : "dark"} />
		</SafeAreaView>
	);
};

export default HomeScreen;
