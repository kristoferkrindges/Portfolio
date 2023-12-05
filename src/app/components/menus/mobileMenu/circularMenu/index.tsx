import { DarkModeContext } from "@/app/contexts/darkModeContext";
import {
	CircularContainer,
	CircularMenuContainer,
	Circle,
	ItemCircle,
} from "./style";
import { MouseEventHandler, useContext } from "react";
import {
	ContactIcon,
	LanguageIcon,
	MoonIcon,
	SunIcon,
} from "@/app/components/icons/iO5Icons.styled";
import { LanguageContext } from "@/app/contexts/languageContext";
import { ThemeContext } from "@/app/providers/themeProvider";
import Link from "next/link";

export default function CircularMenu({ openMenu, handlerCircle }) {
	const { theme } = useContext(ThemeContext) || { theme: "light" };
	const { alterDarkMode } = useContext(DarkModeContext) || {};
	const languageContext = useContext(LanguageContext);
	if (!languageContext) {
		throw new Error("LanguageContext not provided!");
	}
	const { language, handleFilter } = languageContext;
	const handlerLanguage = () => {
		handleFilter("yourId");
		handlerCircle();
	};
	const handlerDarkMode = () => {
		alterDarkMode();
		handlerCircle();
		console.log("executado");
	};

	return (
		<CircularContainer>
			<CircularMenuContainer className={openMenu ? "active" : ""}>
				{openMenu && (
					<Circle>
						<ItemCircle onClick={handlerDarkMode}>
							{theme ? <MoonIcon /> : <SunIcon />}
						</ItemCircle>

						<ItemCircle>
							<Link href="#Contact">
								<ContactIcon onClick={handlerCircle} />
							</Link>
						</ItemCircle>

						<ItemCircle onClick={handlerLanguage}>
							<LanguageIcon />
						</ItemCircle>
					</Circle>
				)}
			</CircularMenuContainer>
		</CircularContainer>
	);
}
