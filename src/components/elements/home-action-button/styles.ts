import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = (theme: "light" | "dark") => {
	return StyleSheet.create({
		Button: {
			height: 40,
			width: 40,
			padding: 5,
			borderWidth: 2,
			borderColor:
				theme === "dark" ? colors.primaryLight : colors.primaryDark,
			backgroundColor:
				theme === "dark" ? colors.primaryOrange : colors.primaryYellow,
			justifyContent: "center",
			alignItems: "center",
			borderRadius: 10,
		},
	});
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
