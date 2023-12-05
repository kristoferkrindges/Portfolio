import React, { useContext } from "react";
import { SocialButton } from "./style";
import {
	GithubIcon,
	LinkedinIcon,
} from "@/app/components/icons/fAIcons.styled";
import { GmailIcon } from "@/app/components/icons/sIIcons.styled";
import Link from "next/link";
import { ThemeContext } from "@/app/providers/themeProvider";

interface SocialButtonsProps {
	type: "Github" | "Linkedin" | "Gmail";
}

export default function SocialButtons({ type }: SocialButtonsProps) {
	const handleEmailClick = () => {
		window.location.href = `mailto:kristoferkrindges@gmail.com`;
	};
	const { theme } = useContext(ThemeContext) || {};

	return (
		<>
			{type === "Github" && (
				<Link href="https://github.com/kristoferkrindges">
					<SocialButton
						backgroundColor={theme === "dark" ? `#ffff` : `#171616`}
					>
						<GithubIcon />
					</SocialButton>
				</Link>
			)}
			{type === "Linkedin" && (
				<Link href="https://www.linkedin.com/in/kristoferkrindgesprofile/">
					<SocialButton backgroundColor={`#2464AE`}>
						<LinkedinIcon />
					</SocialButton>
				</Link>
			)}
			{type === "Gmail" && (
				<SocialButton backgroundColor={`#c71610`} onClick={handleEmailClick}>
					<GmailIcon />
				</SocialButton>
			)}
		</>
	);
}
