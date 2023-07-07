import { colors } from "@/constants/colors";
import { StyleSheet } from "react-native";

const styles = (theme: "light" | "dark") => {
	return StyleSheet.create({
		HeaderContainer: {
			flexDirection: "row",
			columnGap: 10,
			alignItems: "center",
			marginTop: 10,
			paddingHorizontal: 10,
		},
		LanguageContainer: {
			flex: 1,
			height: 40,
			flexDirection: "row",
			justifyContent: "center",
			borderWidth: 1.5,
			borderColor:
				theme === "dark" ? colors.primaryLight : colors.primaryDark,
			borderRadius: 8,
			backgroundColor:
				theme === "dark" ? colors.secondaryDark : colors.secondaryLight,
			paddingHorizontal: 5,
		},
		LanguageText: {
			fontFamily: "Quicksand_600SemiBold",
			fontSize: 20,
			letterSpacing: 1.5,
			color: theme === "dark" ? colors.primaryLight : colors.primaryDark,
		},
	});
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
