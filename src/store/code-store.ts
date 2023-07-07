import { create } from "zustand";

interface CodeStore {
	code: string;
	setCode: (newCode: string) => void;
}

export const useCodeStore = create<CodeStore>()((set) => ({
	code: "",
	setCode: (newCode) =>
		set((prevCode) => ({
			code: prevCode + newCode,
		})),
}));
