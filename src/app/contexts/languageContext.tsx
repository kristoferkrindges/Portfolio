import React from "react";
import useLanguage from "../hooks/languageHook";

interface LanguageContextProps {
	handleFilter: (id: string) => void;
	language: string;
}

const LanguageContext = React.createContext<LanguageContextProps | null>(null);

function LanguageProvider({ children }: { children: React.ReactNode }) {
	const { handleFilter, language } = useLanguage();
	return (
		<LanguageContext.Provider
			value={{
				handleFilter,
				language,
			}}
		>
			{children}
		</LanguageContext.Provider>
	);
}

export { LanguageContext, LanguageProvider };
