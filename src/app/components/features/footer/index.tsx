import React, { useContext } from "react";

import Link from "next/link";
import {
	FooterContainer,
	MidSide,
	Subtitle,
	Span,
	ContextFooter,
} from "./style";
import KristoferPhoto from "../../../assets/images/kristofer.png";
import { GmailIcon } from "../../icons/sIIcons.styled";
import {
	CopyRightIcon,
	GithubIcon,
	LinkedinIcon,
} from "../../icons/fAIcons.styled";
import { LanguageContext } from "@/app/contexts/languageContext";
import {
	LeftSideTop,
	Photo,
	RightSideTop,
	Title,
} from "../../menus/topSideMenu/style";
import { ScrollUp } from "../../buttons/scrollDownAndUp/index.styled";

export default function Footer() {
	const { language } = useContext(LanguageContext) || {};
	return (
		<ContextFooter>
			<FooterContainer>
				<RightSideTop className="Icons">
					<Link href="#">
						<GmailIcon />
					</Link>
					<Link href="#">
						<LinkedinIcon />
					</Link>
					<Link href="#">
						<GithubIcon />
					</Link>
				</RightSideTop>
				<MidSide>
					<CopyRightIcon />
					{/* <Title>
					{language === "Portuguese"
						? "Desenvolvedor de Software"
						: "Software Developer"}
				</Title> */}
					<Subtitle>
						{/* <CopyRightIcon /> */}
						<Span>{`Kristofer. ${
							language === "Portuguese"
								? "Todos os direitos reservados"
								: "All right reserved"
						}`}</Span>
					</Subtitle>
				</MidSide>
				<LeftSideTop className="Scroll">
					<Link href="#Home">
						<ScrollUp />
					</Link>
				</LeftSideTop>
			</FooterContainer>
		</ContextFooter>
	);
}
