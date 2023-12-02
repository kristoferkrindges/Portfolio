import React, { useContext } from "react";
import { LanguageContext } from "@/app/contexts/languageContext";
import { H2, H5 } from "../../titles/index.styled";
import { Section, SeparatorSection } from "../../containers/containers.styled";
import Card from "./card";
import { SeparatorCards, SeparatorSkills } from "./style";
import {
	BackEndIcon,
	ReactIcon,
	ToolsIcon,
	UxIcon,
} from "../../icons/iO5Icons.styled";

export default function Skills() {
	const { language } = useContext(LanguageContext) || {};
	return (
		<Section id="Skills" style={{ minHeight: `85vh` }}>
			<H2>{language === "Portuguese" ? "Habilidades" : "Skills"}</H2>
			<H5 style={{ marginBottom: `4rem` }}>
				{language === "Portuguese" ? "Meus Serviços" : "My Services"}
			</H5>
			<SeparatorCards>
				<SeparatorSkills>
					<Card name={"FRONTEND"} icon={<ReactIcon />} />
					<Card name={"UX-DESIGN"} icon={<UxIcon />} />
				</SeparatorSkills>
				<SeparatorSkills>
					<Card name={"BACKEND"} icon={<BackEndIcon />} />
					<Card
						name={language === "Portuguese" ? "Ferramentas" : "Tools"}
						icon={<ToolsIcon />}
					/>
				</SeparatorSkills>
			</SeparatorCards>
		</Section>
	);
}
