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
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "@/app/utils/motion";

export default function Footer() {
	const { language } = useContext(LanguageContext) || {};
	return (
		<ContextFooter
			as={motion.div}
			variants={fadeInBottomVariant}
			initial="hidden"
			whileInView="visible"
			transition={{ type: "tween", duration: 1 }}
		>
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
					{/* <CopyRightIcon /> */}
					<Subtitle>
						<CopyRightIcon />
						<Span>{`${
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
