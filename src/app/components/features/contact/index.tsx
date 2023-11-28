import React, { useContext } from "react";
import { LanguageContext } from "@/app/contexts/languageContext";
import { H2, H5 } from "../../titles/index.styled";
import { Section, SeparatorSection } from "../../containers/containers.styled";
import BoxOneContact from "./boxOne";
import BoxTwoContact from "./boxTwo";

export default function Contact() {
	const { language } = useContext(LanguageContext) || {};
	return (
		<Section>
			<H2>{language === "Portuguese" ? "Contato" : "Contact"}</H2>
			<H5 style={{ marginBottom: `3rem` }}>
				{language === "Portuguese"
					? "Vamos trabalhar juntos"
					: "Let's work together"}
			</H5>
			<SeparatorSection>
				<BoxOneContact />
				<BoxTwoContact />
			</SeparatorSection>
		</Section>
	);
}
