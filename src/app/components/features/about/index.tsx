import React, { useContext } from "react";
import BoxOneAbout from "./boxOne";
import { LanguageContext } from "@/app/contexts/languageContext";
import BoxTwoAbout from "./boxTwo";
import { H2, H5 } from "../../titles/index.styled";
import { Section, SeparatorSection } from "../../containers/containers.styled";

export default function About() {
	const { language } = useContext(LanguageContext) || {};
	return (
		<Section id="About" style={{ minHeight: `98vh` }}>
			<H2>{language === "Portuguese" ? "Sobre" : "About Me"}</H2>
			<H5>{language === "Portuguese" ? "Conheça mais" : "Get To Know"}</H5>
			<SeparatorSection>
				<BoxOneAbout />
				<BoxTwoAbout />
			</SeparatorSection>
		</Section>
	);
}
