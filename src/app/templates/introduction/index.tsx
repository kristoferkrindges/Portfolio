import React from "react";
import { IntroductionContainer } from "./style";
import DesktopIntroduction from "@/app/components/features/introduction/desktop";
import MobileIntroduction from "@/app/components/features/introduction/mobile";
export default function IntroductionTemplate() {
	return (
		<IntroductionContainer id="Home">
			<DesktopIntroduction />
			<MobileIntroduction />
		</IntroductionContainer>
	);
}
