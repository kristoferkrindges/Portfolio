"use client";
import React, { createContext, useState } from "react";
import { ThemeProvider as ThemeStyle } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import Home from "../templates/home";
import { LanguageProvider } from "../contexts/languageContext";
import { DarkModeProvider } from "../contexts/darkModeContext";

interface ThemeContextProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	theme: string;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeProvider() {
	const [theme, setTheme] = useState("light");
	const themeStyle = theme === "light" ? lightTheme : darkTheme;

	const contextValue: ThemeContextProps = { setTheme, theme };

	return (
		<ThemeContext.Provider value={contextValue}>
			<ThemeStyle theme={themeStyle}>
				<GlobalStyle />
				<LanguageProvider>
					<DarkModeProvider>
						<Home />
					</DarkModeProvider>
				</LanguageProvider>
			</ThemeStyle>
		</ThemeContext.Provider>
	);
}
