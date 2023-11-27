import React, { useContext } from "react";
import { AboutSection, SeparatorContainer, H5, H2 } from "./style";
import BoxOneAbout from "./boxOne";
import { LanguageContext } from "@/app/contexts/languageContext";
import BoxTwoAbout from "./boxTwo";
export default function About() {
	const { language } = useContext(LanguageContext) || {};
	return (
		<AboutSection>
			<H2>{language === "Portuguese" ? "Sobre" : "About Me"}</H2>
			<H5>{language === "Portuguese" ? "Conheça mais" : "Get To Know"}</H5>
			<SeparatorContainer>
				<BoxOneAbout />
				<BoxTwoAbout />
			</SeparatorContainer>
		</AboutSection>
	);
}
