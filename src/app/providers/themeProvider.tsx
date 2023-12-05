"use client";
import React, { createContext, useState, useEffect } from "react";
import { ThemeProvider as ThemeStyle } from "styled-components";
import { darkTheme, lightTheme } from "../styles/theme";
import { GlobalStyle } from "../styles/globalStyles";
import Home from "../templates/home";
import { LanguageProvider } from "../contexts/languageContext";
import { DarkModeProvider } from "../contexts/darkModeContext";
import { ApiEmailProvider } from "../contexts/apiEmailContext";

interface ThemeContextProps {
	setTheme: React.Dispatch<React.SetStateAction<string>>;
	theme: string;
}

export const ThemeContext = createContext<ThemeContextProps | null>(null);

export default function ThemeProvider() {
	const [theme, setTheme] = useState("light");
	useEffect(() => {
		if (typeof window !== "undefined") {
			const local = localStorage.getItem("darkmode");
			if (local) {
				setTheme(local);
			}
		}
	}, []);
	const themeStyle = theme === "light" ? lightTheme : darkTheme;

	const contextValue: ThemeContextProps = { setTheme, theme };

	return (
		<ThemeContext.Provider value={contextValue}>
			<ThemeStyle theme={themeStyle}>
				<GlobalStyle />
				<ApiEmailProvider>
					<LanguageProvider>
						<DarkModeProvider>
							<Home />
						</DarkModeProvider>
					</LanguageProvider>
				</ApiEmailProvider>
			</ThemeStyle>
		</ThemeContext.Provider>
	);
}
