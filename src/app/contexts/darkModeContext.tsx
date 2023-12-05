import React from "react";
import useDarkMode from "../hooks/darkModeHook";

interface DarkModeContextProps {
	alterDarkMode: () => void;
}

const DarkModeContext = React.createContext<DarkModeContextProps | null>(null);

function DarkModeProvider({ children }: { children: React.ReactNode }) {
	const contextValue: DarkModeContextProps | null = useDarkMode();

	return (
		<DarkModeContext.Provider value={contextValue}>
			{children}
		</DarkModeContext.Provider>
	);
}

export { DarkModeContext, DarkModeProvider };
