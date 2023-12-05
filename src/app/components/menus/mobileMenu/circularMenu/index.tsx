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

interface CircularMenuProps {
	openMenu: boolean;
	handlerCircle: MouseEventHandler;
}

export default function CircularMenu({
	openMenu,
	handlerCircle,
}: CircularMenuProps) {
	const { theme } = useContext(ThemeContext) || { theme: "light" };
	const { alterDarkMode } = useContext(DarkModeContext) || {};
	const languageContext = useContext(LanguageContext);
	if (!languageContext) {
		throw new Error("LanguageContext not provided!");
	}
	const { handleFilter } = languageContext;
	const handlerLanguage = (evt: React.MouseEvent) => {
		handleFilter("yourId");
		handlerCircle(evt);
	};
	const handlerDarkMode = (evt: React.MouseEvent) => {
		alterDarkMode?.();
		handlerCircle(evt);
	};
	console.log(theme);
	return (
		<CircularContainer>
			<CircularMenuContainer className={openMenu ? "active" : ""}>
				{openMenu && (
					<Circle>
						<ItemCircle onClick={handlerDarkMode}>
							{theme === "light" ? <MoonIcon /> : <SunIcon />}
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
