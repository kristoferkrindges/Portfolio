import React from "react";
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

export default function BoxTwoAbout() {
	return (
		<BoxTwoContainer>
			<CardContent>
				<Photo>
					<Logo src={KristoferPhoto.src} />
				</Photo>
				<Icons>
					<GithubIcon />
					<LinkedinIcon />
					<GmailIcon />
				</Icons>
				<NameSubject>
					<Name>{"Kristofer Krindges"}</Name>
					<Subject>kristoferkrindges@gmail.com</Subject>
				</NameSubject>
				<Buttons>
					<HireMe>Download CV</HireMe>
				</Buttons>
			</CardContent>
		</BoxTwoContainer>
	);
}
