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
import { motion } from "framer-motion";
import {
	skillsFadeInLeftVariant,
	skillsFadeInRightVariant,
	fadeInLeftVariant,
} from "@/app/utils/motion";
import { useMediaQuery } from "react-responsive";

export default function Skills() {
	const { language } = useContext(LanguageContext) || {};
	const isSmallScreen = useMediaQuery({ query: "(max-width: 999px)" });
	return (
		<Section id="Skills" style={{ minHeight: `85vh` }}>
			<H2>{language === "Portuguese" ? "Habilidades" : "Skills"}</H2>
			<H5 style={{ marginBottom: `4rem` }}>
				{language === "Portuguese" ? "Meus Serviços" : "My Services"}
			</H5>
			<SeparatorCards>
				<SeparatorSkills>
					<motion.div
						variants={
							isSmallScreen ? fadeInLeftVariant : skillsFadeInLeftVariant
						}
						initial="hidden"
						whileInView="visible"
						transition={{ type: "tween", duration: 1 }}
						style={{ width: `100%` }}
					>
						<Card name={"FRONTEND"} icon={<ReactIcon />} />
					</motion.div>
					<motion.div
						variants={
							isSmallScreen ? fadeInLeftVariant : skillsFadeInLeftVariant
						}
						initial="hidden"
						whileInView="visible"
						transition={{ type: "tween", duration: 2 }}
						style={{ width: `100%` }}
					>
						<Card name={"UX-DESIGN"} icon={<UxIcon />} />
					</motion.div>
				</SeparatorSkills>
				<SeparatorSkills>
					<motion.div
						variants={
							isSmallScreen ? fadeInLeftVariant : skillsFadeInRightVariant
						}
						initial="hidden"
						whileInView="visible"
						transition={{ type: "tween", duration: 2 }}
						style={{ width: `100%` }}
					>
						<Card name={"BACKEND"} icon={<BackEndIcon />} />
					</motion.div>
					<motion.div
						variants={
							isSmallScreen ? fadeInLeftVariant : skillsFadeInRightVariant
						}
						initial="hidden"
						whileInView="visible"
						transition={{ type: "tween", duration: 1 }}
						style={{ width: `100%` }}
					>
						<Card
							name={language === "Portuguese" ? "Ferramentas" : "Tools"}
							icon={<ToolsIcon />}
						/>
					</motion.div>
				</SeparatorSkills>
			</SeparatorCards>
		</Section>
	);
}
