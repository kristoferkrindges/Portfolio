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
import { motion } from "framer-motion";
import {
	fadeInTopVariant,
	fadeInBottomVariant,
	fadeInLeftVariant,
} from "@/app/utils/motion";
import { useMediaQuery } from "react-responsive";
import Link from "next/link";

const skillButtons = [
	{ icon: <ReactIcon />, backgroundColor: "#149eca" },
	{ icon: <NodeIcon />, backgroundColor: "#026e00" },
	{ icon: <JavaIcon />, backgroundColor: "#dc5946" },
	{ icon: <DotNetIcon />, backgroundColor: "#6c287d" },
	{ icon: <PythonIcon />, backgroundColor: "#f7c41c" },
	{ icon: <MongoIcon />, backgroundColor: "#12a54f" },
	{ icon: <PostgreIcon />, backgroundColor: "#31648c" },
];

const statsData = [
	{ icon: <ProjectIcon />, text: "Projetos", time: "8+ Completos" },
	{ icon: <DegreeIcon />, text: "Cursos", time: "6+ Finalizados" },
	{ icon: <ExperienceIcon />, text: "Experiência", time: "2+ Desenvolvendo" },
];

const BoxOneAbout = () => {
	const { language } = useContext(LanguageContext) || {};
	const isSmallScreen = useMediaQuery({ query: "(max-width: 871px)" });

	return (
		<BoxOneContainer>
			<Card>
				{statsData.map((data, index) => (
					<Cards
						key={index}
						as={motion.div}
						variants={isSmallScreen ? fadeInLeftVariant : fadeInTopVariant}
						initial="hidden"
						whileInView="visible"
						transition={{
							type: "tween",
							duration: isSmallScreen ? 0 : 0.5 + index * 0.5,
						}}
					>
						<Chart>{data.icon}</Chart>
						<EarningsText>
							{language === "Portuguese" ? data.text : data.text}
						</EarningsText>
						<Time>{data.time}</Time>
					</Cards>
				))}
			</Card>
			<Skills>
				{skillButtons.map((button, index) => (
					<motion.div
						key={index}
						variants={fadeInBottomVariant}
						initial="hidden"
						whileInView="visible"
						transition={{ type: "tween", duration: 0.5 + index * 0.2 }}
					>
						<SocialButton color={button.backgroundColor}>
							{button.icon}
						</SocialButton>
					</motion.div>
				))}
			</Skills>
			<Content
				as={motion.div}
				variants={fadeInLeftVariant}
				initial="hidden"
				whileInView="visible"
			>
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
				<Link href="#Contact">
					<Button style={{ top: `40px` }}>
						{language === "Portuguese" ? "Vamos conversar" : "Let's Talk"}
					</Button>
				</Link>
			</Content>
		</BoxOneContainer>
	);
};

export default BoxOneAbout;
