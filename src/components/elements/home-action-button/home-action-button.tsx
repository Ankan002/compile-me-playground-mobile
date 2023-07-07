import { useThemeStore } from "@/src/store";
import { GestureResponderEvent, Pressable } from "react-native";
import { darkStyles, lightStyles } from "./styles";
import {
	Ionicons,
	FontAwesome5,
	MaterialCommunityIcons,
} from "@expo/vector-icons";
import { colors } from "@/constants/colors";

interface Props {
	icon: "run" | "settings" | "ai";
	action: (e: GestureResponderEvent) => void;
}

const HomeActionButton = (props: Props) => {
	const { icon, action } = props;

	const { theme } = useThemeStore();

	return (
		<Pressable
			onPress={action}
			style={theme === "dark" ? darkStyles.Button : lightStyles.Button}
		>
			{icon === "settings" && (
				<Ionicons
					size={25}
					name="ios-settings-sharp"
					color={
						theme === "dark"
							? colors.primaryLight
							: colors.primaryDark
					}
				/>
			)}

			{icon === "run" && (
				<FontAwesome5
					size={20}
					name="play"
					color={
						theme === "dark"
							? colors.primaryLight
							: colors.primaryDark
					}
				/>
			)}

			{icon === "ai" && (
				<MaterialCommunityIcons
					name="robot"
					size={25}
					color={
						theme === "dark"
							? colors.primaryLight
							: colors.primaryDark
					}
				/>
			)}
		</Pressable>
	);
};

export default HomeActionButton;
