import { colors } from "@/constants/colors";
import { Platform, StatusBar, StyleSheet } from "react-native";

const styles = (theme: "light" | "dark") => {
	return StyleSheet.create({
		Container: {
			flex: 1,
			backgroundColor:
				theme === "light" ? colors.primaryLight : colors.primaryDark,
			paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
		},
		CodeEditorContainer: {
			flex: 1,
			marginTop: 20,
			borderTopWidth: 1,
			borderColor:
				theme === "dark" ? colors.primaryLight : colors.primaryDark,
		},
	});
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
