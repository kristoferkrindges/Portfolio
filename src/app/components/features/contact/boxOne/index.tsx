import React, { useContext, useState } from "react";
import { LanguageContext } from "@/app/contexts/languageContext";
import {
	BoxOneContactContainer,
	User,
	ImgBox,
	Photo,
	Content,
	Name,
	Span,
	Toggle,
	Contacts,
	ContactItem,
	ButtonSocial,
	HiperLink,
} from "./style";
import KristoferPhoto from "../../../../assets/images/kristofer.png";
import { GmailIcon } from "@/app/components/icons/sIIcons.styled";
import {
	GithubIcon,
	LinkedinIcon,
} from "@/app/components/icons/fAIcons.styled";
import Link from "next/link";
import { motion } from "framer-motion";
import {
	fadeInTopVariant,
	contactFadeInLeftVariant,
	fadeInLeftVariant,
} from "@/app/utils/motion";
import { useMediaQuery } from "react-responsive";

export default function BoxOneContact() {
	const { language } = useContext(LanguageContext) || {};
	const isSmallScreen = useMediaQuery({ query: "(max-width: 550px)" });

	const [contacts, setContacts] = useState(true);

	const handleEmailClick = () => {
		window.location.href = `mailto:kristoferkrindges@gmail.com`;
	};

	return (
		<BoxOneContactContainer>
			<User
				as={motion.div}
				variants={fadeInTopVariant}
				initial="hidden"
				whileInView="visible"
				transition={{ type: "tween", duration: 1 }}
			>
				<ImgBox>
					<Photo src={KristoferPhoto.src} />
				</ImgBox>
				<Content>
					<Name>Kristofer Krindges</Name>
					<Span>
						{language === "Portuguese"
							? "Desenvolvedor de Software"
							: "Software Developer"}
					</Span>
				</Content>
			</User>
			<Contacts>
				<ContactItem
					as={motion.div}
					variants={
						isSmallScreen ? fadeInLeftVariant : contactFadeInLeftVariant
					}
					initial="hidden"
					whileInView="visible"
					transition={{ type: "tween", duration: 1 }}
				>
					<ButtonSocial backgroundColor={"#c71610"} onClick={handleEmailClick}>
						<GmailIcon />
					</ButtonSocial>
					<HiperLink>kristoferkrindges@gmail.com</HiperLink>
				</ContactItem>
				<ContactItem
					as={motion.div}
					variants={
						isSmallScreen ? fadeInLeftVariant : contactFadeInLeftVariant
					}
					initial="hidden"
					whileInView="visible"
					transition={{ type: "tween", duration: 1.2 }}
				>
					<Link href="https://www.linkedin.com/in/kristoferkrindgesprofile/">
						<ButtonSocial backgroundColor={"#2464AE"}>
							<LinkedinIcon />
						</ButtonSocial>
					</Link>
					<HiperLink>linkedin.com/kristoferkrindgesprofile</HiperLink>
				</ContactItem>
				<ContactItem
					as={motion.div}
					variants={
						isSmallScreen ? fadeInLeftVariant : contactFadeInLeftVariant
					}
					initial="hidden"
					whileInView="visible"
					transition={{ type: "tween", duration: 1.5 }}
				>
					<Link href="https://github.com/kristoferkrindges">
						<ButtonSocial backgroundColor={"#171616"}>
							<GithubIcon />
						</ButtonSocial>
					</Link>
					<HiperLink>github.com/kristoferkrindges</HiperLink>
				</ContactItem>
			</Contacts>
		</BoxOneContactContainer>
	);
}
