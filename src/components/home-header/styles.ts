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
	});
};

export const lightStyles = styles("light");
export const darkStyles = styles("dark");
