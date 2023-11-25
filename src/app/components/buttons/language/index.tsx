import React, { useState, useContext } from "react";

import { LanguageIcon } from "../../icons/iO5Icons.styled";
import { CircleContainer, Legend } from "../darkMode/style";
import { LanguageContext } from "@/app/contexts/languageContext";
import SettingsMenu from "../../menus/settingsMenu";

export default function LanguageButton() {
	const { language } = useContext(LanguageContext) || {};
	const [showLanguageLegend, setShowLanguageLegend] = useState(false);
	const [menuSettings, setMenuSettings] = useState(false);

	const handleMouseEnterLanguage = () => {
		setShowLanguageLegend(true);
	};

	const handleMouseLeaveLanguage = () => {
		setShowLanguageLegend(false);
	};

	const handlerMenu = () => {
		setMenuSettings(menuSettings ? false : true);
	};

	return (
		<>
			{menuSettings && (
				<SettingsMenu
					handlerMenu={handlerMenu}
					bottom={`-200%`}
					right={`-10%`}
					type={true}
				/>
			)}
			<CircleContainer>
				<LanguageIcon
					onClick={handlerMenu}
					onMouseEnter={handleMouseEnterLanguage}
					onMouseLeave={handleMouseLeaveLanguage}
				/>
				{showLanguageLegend && (
					<Legend>
						{language === "Portuguese" ? "English" : "Portuguese"}
					</Legend>
				)}
			</CircleContainer>
		</>
	);
}
