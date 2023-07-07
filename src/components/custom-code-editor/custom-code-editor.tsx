import { useCodeStore, useLanguageStore, useThemeStore } from "@/src/store";
import CodeEditor, {
	CodeEditorSyntaxStyles,
} from "@rivascva/react-native-code-editor";
import { styles } from "./styles";
import { useEffect, useMemo } from "react";

const CustomCodeEditor = () => {
	const { code, setCode } = useCodeStore();
	const { language } = useLanguageStore();
	const { theme } = useThemeStore();

	useEffect(() => {
		console.log(code);
	}, [code]);


	// TODO: Decide themes and set them up next ASAP. 
	return useMemo(
		() => (
			<CodeEditor
				language={language.editorLanguage}
				initialValue={code}
				onChange={setCode}
				style={styles.Editor}
				syntaxStyle={
					theme === "dark"
						? CodeEditorSyntaxStyles.tomorrowNight
						: CodeEditorSyntaxStyles.atomOneLight
				}
				showLineNumbers
			/>
		),
		[language]
	);
};

export default CustomCodeEditor;
