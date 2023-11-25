import { useContext } from "react";
import { ThemeContext } from "../providers/themeProvider";

export default function DarkModeHook() {
	const themeContext = useContext(ThemeContext);
	if (!themeContext) {
		return null;
	}
	const { setTheme, theme } = themeContext;
	const alterDarkMode = () => {
		if (theme === "light") {
			setTheme("dark");
			localStorage.setItem("darkmode", "dark");
		} else {
			setTheme("light");
			localStorage.setItem("darkmode", "light");
		}
		return;
	};
	return { alterDarkMode };
}
