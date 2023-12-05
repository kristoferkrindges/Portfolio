import React, { useContext, useEffect, useState } from "react";
import Link from "next/link";
import { Navigation, Item, Indicator } from "./style";
import {
	AboutIcon,
	ContactIcon,
	HomeIcon,
	ProjectsIcon,
	SettingsIcon,
} from "../../icons/iO5Icons.styled";
import { Icon, Legend, List } from "../mobileMenu/style";
import { LanguageContext } from "@/app/contexts/languageContext";

export default function NavigationMenu() {
	const [activeSection, setActiveSection] = useState("Home");

	const { language } = useContext(LanguageContext) || {};

	const handleScroll = () => {
		const scrollPosition = window.scrollY;
		const sections = document.querySelectorAll("section");

		sections.forEach((section) => {
			const { top, bottom } = section.getBoundingClientRect();

			// Verifica se a seção está pelo menos 50% visível na tela
			if (top <= window.innerHeight / 2 && bottom >= window.innerHeight / 2) {
				setActiveSection(section.id);
			}
		});
	};

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);

		// Limpeza do evento quando o componente for desmontado
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []); // Adiciona dependências se necessário

	const sections = [
		{ id: "Home", text: "Inicio", icon: <HomeIcon /> },
		{ id: "About", text: "Sobre", icon: <AboutIcon /> },
		{ id: "Skills", text: "Habilidades", icon: <SettingsIcon /> },
		{ id: "Projects", text: "Projetos", icon: <ProjectsIcon /> },
		{ id: "Contact", text: "Contato", icon: <ContactIcon /> },
	];

	return (
		<Navigation>
			<List>
				{sections.map((section) => (
					<Item
						key={section.id}
						className={activeSection === section.id ? "active" : "drop"}
					>
						<Link href={`#${section.id}`}>
							<Icon
								className="icon"
								style={activeSection === section.id ? { color: "white" } : {}}
							>
								{section.icon}
							</Icon>

							<Legend className="text">
								{language === "Portuguese" ? section.text : section.id}
							</Legend>
						</Link>
					</Item>
				))}
				<Indicator
					style={{
						transform: `translateX(calc(70px * ${sections.findIndex(
							(section) => section.id === activeSection
						)}))`,
					}}
				/>
			</List>
		</Navigation>
	);
}
