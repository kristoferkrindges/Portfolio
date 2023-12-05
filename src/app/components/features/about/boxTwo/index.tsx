import React, { useContext } from "react";
import {
	BoxTwoContainer,
	CardContent,
	Photo,
	Logo,
	Icons,
	NameSubject,
	Name,
	Subject,
	Buttons,
	HireMe,
} from "./style";
import {
	GithubIcon,
	LinkedinIcon,
} from "@/app/components/icons/fAIcons.styled";
import { GmailIcon } from "@/app/components/icons/sIIcons.styled";
import KristoferPhoto from "../../../../assets/images/kristofer.png";
import Link from "next/link";
import { LanguageContext } from "@/app/contexts/languageContext";
import { motion } from "framer-motion";
import { fadeInRightVariant, fadeInLeftVariant } from "@/app/utils/motion";
import { useMediaQuery } from "react-responsive";

export default function BoxTwoAbout() {
	const { language } = useContext(LanguageContext) || {};
	const isSmallScreen = useMediaQuery({ query: "(max-width: 999px)" });
	const fileName = "KristoferKrindges_DesenvolvedorDeSoftware";
	const handleEmailClick = () => {
		window.location.href = `mailto:kristoferkrindges@gmail.com`;
	};
	return (
		<BoxTwoContainer
			as={motion.div}
			variants={isSmallScreen ? fadeInLeftVariant : fadeInRightVariant}
			initial="hidden"
			whileInView="visible"
		>
			<CardContent>
				<Photo>
					<Logo src={KristoferPhoto.src} />
				</Photo>
				<Icons>
					<Link href={"https://github.com/kristoferkrindges"}>
						<GithubIcon />
					</Link>
					<Link href={"https://www.linkedin.com/in/kristoferkrindgesprofile/"}>
						<LinkedinIcon />
					</Link>
					<GmailIcon onClick={handleEmailClick} />
				</Icons>
				<NameSubject>
					<Name>{"Kristofer Krindges"}</Name>
					<Subject>
						{language === "Portuguese"
							? "Desenvolvedor de Software"
							: "Software Developer"}
					</Subject>
				</NameSubject>
				<Buttons>
					<Link
						href="/pdf/KristoferKrindgesDesenvolvedorDeSoftware.pdf"
						target="_blank"
						download={fileName}
					>
						<HireMe>Download CV</HireMe>
					</Link>
				</Buttons>
			</CardContent>
		</BoxTwoContainer>
	);
}
