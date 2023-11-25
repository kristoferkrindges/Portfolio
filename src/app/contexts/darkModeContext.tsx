import React from "react";
import useDarkMode from "../hooks/darkModeHook";

interface DarkModeContextProps {
	alterDarkMode: () => void;
}
const DarkModeContext = React.createContext<DarkModeContextProps | null>(null);

function DarkModeProvider({ children }: { children: React.ReactNode }) {
	const { alterDarkMode } = useDarkMode();
	return (
		<DarkModeContext.Provider
			value={{
				alterDarkMode,
			}}
		>
			{children}
		</DarkModeContext.Provider>
	);
}

export { DarkModeContext, DarkModeProvider };
