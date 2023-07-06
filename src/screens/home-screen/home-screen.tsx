import { SafeAreaView, Text } from "react-native";
import { styles } from "./styles";
import { StatusBar } from "expo-status-bar";

const HomeScreen = () => {
	return (
		<SafeAreaView style={styles.Container}>
			<Text>Home Screen</Text>
            <StatusBar style="dark" />
		</SafeAreaView>
	);
};

export default HomeScreen;
