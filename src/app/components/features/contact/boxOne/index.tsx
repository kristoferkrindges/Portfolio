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

export default function BoxOneContact() {
	const { language } = useContext(LanguageContext) || {};

	const [contacts, setContacts] = useState(true);

	const handleEmailClick = () => {
		window.location.href = `mailto:kristoferkrindges@gmail.com`;
	};

	return (
		<BoxOneContactContainer
			style={
				contacts
					? { height: `560px`, transitionDelay: `0.5s` }
					: { height: `100px`, marginBottom: `5rem` }
			}
		>
			<User>
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
				{/* <Toggle
					onClick={() => setContacts(contacts ? false : true)}
					style={contacts ? { backgroundColor: `red` } : {}}
				>
					{contacts
						? language === "Portuguese"
							? "Fechar"
							: "Close"
						: language === "Portuguese"
						? "Abrir"
						: "Open"}
				</Toggle> */}
			</User>
			<Contacts style={contacts ? { height: `400px` } : {}}>
				<ContactItem
					style={
						contacts
							? {
									opacity: 1,
									transform: `scale(1)`,
									transitionDelay: `calc(0.25s * 0)`,
							  }
							: {}
					}
				>
					<ButtonSocial backgroundColor={"#c71610"} onClick={handleEmailClick}>
						<GmailIcon />
					</ButtonSocial>
					<HiperLink>kristoferkrindges@gmail.com</HiperLink>
				</ContactItem>
				<ContactItem
					style={
						contacts
							? {
									opacity: 1,
									transform: `scale(1)`,
									transitionDelay: `calc(0.25s * 1)`,
							  }
							: {}
					}
				>
					<Link href="https://www.linkedin.com/in/kristoferkrindgesprofile/">
						<ButtonSocial backgroundColor={"#2464AE"}>
							<LinkedinIcon />
						</ButtonSocial>
					</Link>
					<HiperLink>linkedin.com/kristoferkrindgesprofile</HiperLink>
				</ContactItem>
				<ContactItem
					style={
						contacts
							? {
									opacity: 1,
									transform: `scale(1)`,
									transitionDelay: `calc(0.25s * 2)`,
							  }
							: {}
					}
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
