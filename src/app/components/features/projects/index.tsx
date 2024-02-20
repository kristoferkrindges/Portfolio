import React, { useContext } from "react";
import { Cards, ProjectSection } from "./style";
import { LanguageContext } from "@/app/contexts/languageContext";
import { H2, H5 } from "../../titles/index.styled";
import Card from "./card";
import TravelingWhite from "../../../assets/images/home_white.png";
import TravelingDark from "../../../assets/images/home_dark.png";
import { ThemeContext } from "@/app/providers/themeProvider";
import TrampoFácil from "../../../assets/images/trampowhite.png";
import TrampoFácilDark from "../../../assets/images/trampodark.png";
import PrecinWhite from "../../../assets/images/precinwhite.png";
import PrecinDark from "../../../assets/images/precindark.png";
import EasyClass from "../../../assets/images/class.png";

export default function Projects() {
	const { language } = useContext(LanguageContext) || {};
	const { theme } = useContext(ThemeContext) || {};

	const projects = [
		{
			name: "Traveling",
			photo: theme === "light" ? TravelingWhite.src : TravelingDark.src,
			phrase:
				language === "Portuguese"
					? "O Traveling é uma rede social. Que tem a possibilidade do usuário criar postagens, interagir com as postagens através de curtidas e comentários, editar seu perfil junto com a sua foto, criar stories e eventos, ter a possibilidade de se comunicar via chat em tempo real, e por fim, receber notificações sobre suas postagens e possíveis seguidores."
					: "The Travelling project is a social media. Which has the possibility for the user to create posts, interact with posts through likes and comments, edit their profile along with their photo, create stories and events, have the possibility of communicating via chat in real time, and finally, receive notifications about your posts and potential followers.",

			git: "https://github.com/kristoferkrindges/Traveling",
			link: "https://travelingsocial.vercel.app/",
			technologies: ["react", "java", "firebase", "node", "postgre"],
		},
		{
			name: "SambaBurguer",
			photo:
				"https://camo.githubusercontent.com/8a077d37131d3ce6c427a5a2bea86c2c58a279cace60f6ae12a0c67c52501b27/68747470733a2f2f63646e2e646973636f72646170702e636f6d2f6174746163686d656e74732f313033383838393436373638393330343133372f313034393036383031343339313238333833342f686f6d652e706e67",
			phrase:
				language === "Portuguese"
					? "O projeto foi desenvolvido em formato de site corporativo no qual um usuário ADMIN realizará os cadastros, atualizações, exclusões e visualizações parciais dos dados da respectiva empresa SambaBurguer."
					: "The project was developed in a corporate website format in which an ADMIN user will carry out the registrations, updates, deletions and partial views of the data of the respective company SambaBurguer.",
			git: "https://github.com/kristoferkrindges/SambaBurguerClient",
			link: "",
			technologies: ["react", "c#"],
		},
		{
			name: "Precin",
			photo: theme === "light" ? PrecinWhite.src : PrecinDark.src,
			phrase:
				language === "Portuguese"
					? "Projeto desenvolvido em formato de rede social para buscar os menores preços em diversos mercados e facilitar a economia do usuário, no qual o usuário pode consultar e criar posts com os produtos de sua preferência."
					: "Project developed in a social network format to search for the lowest prices in different markets and facilitate the user's economy, in which the user can consult and create posts with the products of his choice.",
			git: "https://github.com/kristoferkrindges/Precin",
			link: "https://precinauthentication.web.app/",
			technologies: ["react", "firebase"],
		},

		{
			name: "EasyClass",
			photo: EasyClass.src,
			phrase:
				language === "Portuguese"
					? "Projeto desenvolvido para encontrar aulas particulares fora da área acadêmica, com boa comunicação entre o aluno e o professor escolhido e avaliações confiáveis"
					: "Project developed to find private lessons outside the academic field, along with good communication between the student and the chosen teacher and reliable evaluations",
			git: "https://github.com/kristoferkrindges/EasyClass",
			link: "",
			technologies: ["react", "firebase"],
		},

		{
			name: "TrampoFácil",
			photo: theme === "light" ? TrampoFácil.src : TrampoFácilDark.src,
			phrase:
				language === "Portuguese"
					? "Este projeto foi criado com o objetivo de facilitar a procura de emprego, no qual o usuário terá a oportunidade de anunciar uma vaga ou pesquisar."
					: "This project was created with the aim of facilitating the search for jobs, in which the user will have the opportunity to advertise a vacancy or search.",
			git: "https://github.com/kristoferkrindges/EasyClass",
			link: "https://trampo-facil-front.vercel.app/",
			technologies: ["react", "node", "mongodb"],
		},
	];

	return (
		<ProjectSection id="Projects" style={{ minHeight: `125vh` }}>
			<H2>{language === "Portuguese" ? "Projetos" : "Projects"}</H2>
			<H5>{language === "Portuguese" ? "Meus Projetos" : "My Projects"}</H5>
			<Cards>
				{projects.map((project, index) => (
					<Card
						key={index}
						photo={project.photo}
						name={project.name}
						phrase={project.phrase}
						git={project.git}
						link={project.link}
						technologies={project.technologies}
					/>
				))}
			</Cards>
		</ProjectSection>
	);
}
