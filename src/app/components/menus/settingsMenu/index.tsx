import React, { useContext, useEffect, useRef, MouseEventHandler } from "react";
import { DropMenu, Item, Text } from "./style";
import { ThemeContext } from "@/app/providers/themeProvider";
import { DarkModeContext } from "@/app/contexts/darkModeContext";
import { LanguageIcon, MoonIcon, SunIcon } from "../../icons/iO5Icons.styled";
import { LanguageContext } from "@/app/contexts/languageContext";

interface SettingsMenuProps {
	handlerMenu: () => void;
	bottom?: string;
	right?: string;
	type?: boolean;
}

export default function SettingsMenu({
	handlerMenu,
	bottom,
	right,
	type,
}: SettingsMenuProps) {
	const { theme } = useContext(ThemeContext) || { theme: "light" };
	const languageContext = useContext(LanguageContext);
	if (!languageContext) {
		throw new Error("LanguageContext not provided!");
	}
	const { language, handleFilter } = languageContext;
	const { alterDarkMode } = useContext(DarkModeContext) || {};
	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				handlerMenu();
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, [handlerMenu]);

	return (
		<DropMenu ref={menuRef} style={{ bottom: bottom, right: right }}>
			{!type && (
				<Item onClick={alterDarkMode as MouseEventHandler<HTMLDivElement>}>
					{theme ? <MoonIcon /> : <SunIcon />}
					<Text>DarkMode</Text>
				</Item>
			)}
			<Item onClick={() => handleFilter && handleFilter("yourId")}>
				<LanguageIcon />
				<Text>{language === "Portuguese" ? "English" : "Portuguese"}</Text>
			</Item>
		</DropMenu>
	);
}
