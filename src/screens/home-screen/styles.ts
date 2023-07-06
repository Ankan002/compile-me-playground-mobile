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
		Text: {
			color: theme === "light" ? colors.primaryDark : colors.primaryLight,
			fontSize: 17,
		},
	});
};

export const darkStyles = styles("dark");
export const lightStyles = styles("light");
