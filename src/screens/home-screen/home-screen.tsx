import { SafeAreaView, Text } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useThemeStore } from "@/src/store";
import { useState } from "react";
import CodeEditor, { CodeEditorSyntaxStyles } from "@rivascva/react-native-code-editor";

const HomeScreen = () => {
	const { theme } = useThemeStore();

	const [code, setCode] = useState<string>("");

	return (
		<SafeAreaView
			style={
				theme === "dark" ? darkStyles.Container : lightStyles.Container
			}
		>
			
			<StatusBar style={theme === "dark" ? "light" : "dark"} />
		</SafeAreaView>
	);
};

export default HomeScreen;
