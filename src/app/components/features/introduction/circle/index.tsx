import React from "react";
import {
	CircleContainer,
	Photo,
	MyPicture,
	Social,
	SocialButton,
} from "./style";
import KristoferPhoto from "../../../../assets/images/kristofer.png";
import {
	GithubIcon,
	LinkedinIcon,
} from "@/app/components/icons/fAIcons.styled";
import { GmailIcon } from "@/app/components/icons/sIIcons.styled";

export default function Circle() {
	return (
		<CircleContainer>
			<Photo>
				<MyPicture src={KristoferPhoto.src} />
				<Social className="github">
					<SocialButton backgroundColor={`#000`}>
						<GithubIcon />
					</SocialButton>
				</Social>
				<Social className="linkedin">
					<SocialButton backgroundColor={`#2464AE`}>
						<LinkedinIcon />
					</SocialButton>
				</Social>
				<Social className="gmail">
					<SocialButton backgroundColor={`red`}>
						<GmailIcon />
					</SocialButton>
				</Social>
			</Photo>
		</CircleContainer>
	);
}
