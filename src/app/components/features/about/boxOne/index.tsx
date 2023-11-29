import React, { useContext } from "react";
import {
	BoxOneContainer,
	Card,
	Cards,
	Chart,
	EarningsText,
	Time,
	Content,
	Text,
	Skills,
} from "./style";
import {
	DegreeIcon,
	ExperienceIcon,
	ProjectIcon,
	ReactIcon,
} from "@/app/components/icons/iO5Icons.styled";
import { Button } from "../../introduction/desktop/boxTwo/style";
import { SocialButton } from "@/app/components/buttons/socialButtons/style";
import {
	JavaIcon,
	NodeIcon,
	PythonIcon,
} from "@/app/components/icons/fAIcons.styled";
import {
	DotNetIcon,
	MongoIcon,
	PostgreIcon,
} from "@/app/components/icons/sIIcons.styled";
import { LanguageContext } from "@/app/contexts/languageContext";

export default function BoxOneAbout() {
	const { language } = useContext(LanguageContext) || {};
	return (
		<BoxOneContainer>
			<Card>
				<Cards>
					<Chart>
						<ProjectIcon />
					</Chart>
					<EarningsText>
						{language === "Portuguese" ? "Projetos" : "Projects"}
					</EarningsText>
					<Time>
						8+ {language === "Portuguese" ? "Completos" : "Completed"}
					</Time>
				</Cards>
				<Cards>
					<Chart>
						<DegreeIcon />
					</Chart>
					<EarningsText>
						{language === "Portuguese" ? "Cursos" : "Courses"}
					</EarningsText>
					<Time>
						6+ {language === "Portuguese" ? "Finalizados" : "Finalized"}
					</Time>
				</Cards>
				<Cards>
					<Chart>
						<ExperienceIcon />
					</Chart>
					<EarningsText>
						{language === "Portuguese" ? "Experiência" : "Experience"}
					</EarningsText>
					<Time>
						2+ {language === "Portuguese" ? "Desenvolvendo" : "Years developer"}
					</Time>
				</Cards>
			</Card>
			<Skills>
				<SocialButton backgroundColor={`#149eca`}>
					<ReactIcon />
				</SocialButton>
				<SocialButton backgroundColor={`#026e00`}>
					<NodeIcon />
				</SocialButton>
				<SocialButton backgroundColor={`#dc5946`}>
					<JavaIcon />
				</SocialButton>
				<SocialButton backgroundColor={`#6c287d`}>
					<DotNetIcon />
				</SocialButton>
				<SocialButton backgroundColor={`#f7c41c`}>
					<PythonIcon />
				</SocialButton>
				<SocialButton backgroundColor={`#12a54f`}>
					<MongoIcon />
				</SocialButton>
				<SocialButton backgroundColor={`#31648c`}>
					<PostgreIcon />
				</SocialButton>
			</Skills>
			<Content>
				<Text>
					{language === "Portuguese"
						? ` Sou um Desenvolvedor de Software, com mais de 2 anos de experiência em
					desenvolvimento de sistemas web capaz de criar ou melhorar sistemas
					existentes, e tenho profundo conhecimento em Java, C#, Node, React,
					React Native e banco de dados PostgreSQL e MongoDB NoSQL.`
						: `I am a Software Developer, with more than 2 years of experience in
						development of web systems capable of creating or improving systems
						existing ones, and I have deep knowledge in Java, C#, Node, React,
						React Native and PostgreSQL and MongoDB NoSQL databases.`}
				</Text>
				<Button style={{ top: `40px` }}>
					{language === "Portuguese" ? "Vamos conversar" : "Let's Talk"}
				</Button>
			</Content>
		</BoxOneContainer>
	);
}
