import { SafeAreaView, Text, View } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { StatusBar } from "expo-status-bar";
import { useThemeStore } from "@/src/store";
import { useState } from "react";
import { HomeActionButton } from "@/src/components/elements";

const HomeScreen = () => {
	const { theme } = useThemeStore();

	const [code, setCode] = useState<string>("");

	return (
		<SafeAreaView
			style={
				theme === "dark" ? darkStyles.Container : lightStyles.Container
			}
		>
			<View
				style={{
					flexDirection: "row",
					columnGap: 10,
					alignItems: "center",
					marginTop: 10,
					paddingHorizontal: 10,
				}}
			>
				<HomeActionButton
					icon="ai"
					action={() => console.log("HELLO!!")}
				/>
				
				<HomeActionButton
					icon="settings"
					action={() => console.log("HELLO!!")}
				/>

				<HomeActionButton
					icon="run"
					action={() => console.log("HELLO!!")}
				/>
			</View>
			<StatusBar style={theme === "dark" ? "light" : "dark"} />
		</SafeAreaView>
	);
};

export default HomeScreen;
