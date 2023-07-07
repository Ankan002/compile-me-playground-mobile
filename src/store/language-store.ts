import { Language } from "@/src/types";
import { create } from "zustand";

interface LanguageStore {
	language: Language;
	setLanguage: (newLanguage: Language) => void;
}

export const useLanguageStore = create<LanguageStore>()((set) => ({
	language: {
		languageName: "Javascript",
		editorLanguage: "javascript",
		compilerName: "js",
	},
	setLanguage: (newLanguage) =>
		set(() => ({
			language: newLanguage,
		})),
}));
