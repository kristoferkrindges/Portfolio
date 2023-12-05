import React from "react";

import Link from "next/link";
import DarkModeButton from "../../buttons/darkMode";
import {
	ContainerSideTop,
	LeftSideTop,
	MidSideTop,
	RightSideTop,
	Title,
	Photo,
} from "./style";
import KristoferPhoto from "../../../assets/images/kristofer.png";
import LanguageButton from "../../buttons/language";
import NavigationMenu from "../navigationMenu";

export default function TopSideMenu() {
	return (
		<ContainerSideTop>
			<LeftSideTop>
				<Link href="#Home">
					<Photo src={KristoferPhoto.src} />
				</Link>
				<Title>Kristofer</Title>
			</LeftSideTop>
			<MidSideTop>
				<NavigationMenu />
			</MidSideTop>
			<RightSideTop>
				<DarkModeButton />
				<LanguageButton />
			</RightSideTop>
		</ContainerSideTop>
	);
}
