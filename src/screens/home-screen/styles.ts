import { Platform, StatusBar, StyleSheet } from "react-native";

export const styles = StyleSheet.create({
	Container: {
		flex: 1,
		backgroundColor: "#fff",
		paddingTop: Platform.OS === "android" ? StatusBar.currentHeight : 0,
	},
});
