import { useLanguageStore, useThemeStore } from "@/src/store";
import { View, Text } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import { HomeActionButton } from "@/src/components/elements";

const HomeHeader = () => {
	const { theme } = useThemeStore();
	const { language } = useLanguageStore();

	return (
		<View
			style={
				theme === "dark"
					? darkStyles.HeaderContainer
					: lightStyles.HeaderContainer
			}
		>
			<View
				style={
					theme === "dark"
						? darkStyles.LanguageContainer
						: lightStyles.LanguageContainer
				}
			>
				<Text
					style={
						theme == "dark"
							? darkStyles.LanguageText
							: lightStyles.LanguageText
					}
				>
					{language.languageName}
				</Text>
			</View>

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
