import { useThemeStore } from "@/src/store";
import { View } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { HomeActionButton } from "@/src/components/elements";

const HomeHeader = () => {
	const { theme } = useThemeStore();

	return (
		<View
			style={
				theme === "dark"
					? darkStyles.HeaderContainer
					: lightStyles.HeaderContainer
			}
		>
			<HomeActionButton icon="ai" action={() => console.log("HELLO!!")} />

			<HomeActionButton
				icon="settings"
				action={() => console.log("HELLO!!")}
			/>

			<HomeActionButton
				icon="run"
				action={() => console.log("HELLO!!")}
			/>
		</View>
	);
};

export default HomeHeader;
