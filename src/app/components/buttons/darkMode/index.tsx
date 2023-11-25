import React, { useState, useContext } from "react";

import { MoonIcon, SunIcon } from "../../icons/iO5Icons.styled";
import { DarkModeContext } from "@/app/contexts/darkModeContext";
import { ThemeContext } from "@/app/providers/themeProvider";
import { CircleContainer, Legend } from "./style";

export default function DarkModeButton() {
	const { theme } = useContext(ThemeContext) || { theme: "light" };
	const { alterDarkMode } = useContext(DarkModeContext) || {};
	const [showDarkModeLegend, setShowDarkModeLegend] = useState(false);

	const handleMouseEnterDarkMode = () => {
		setShowDarkModeLegend(true);
	};

	const handleMouseLeaveDarkMode = () => {
		setShowDarkModeLegend(false);
	};

	return (
		<CircleContainer>
			{theme === "dark" ? (
				<SunIcon
					onMouseEnter={handleMouseEnterDarkMode}
					onMouseLeave={handleMouseLeaveDarkMode}
					onClick={alterDarkMode}
				/>
			) : (
				<MoonIcon
					onMouseEnter={handleMouseEnterDarkMode}
					onMouseLeave={handleMouseLeaveDarkMode}
					onClick={alterDarkMode}
				/>
			)}
			{showDarkModeLegend && (
				<Legend>{theme === "dark" ? "light" : "dark"}</Legend>
			)}
		</CircleContainer>
	);
}
