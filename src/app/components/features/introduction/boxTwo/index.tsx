import React, { useContext } from "react";
import {
	BoxTwoContainer,
	Button,
	Content,
	Name,
	Pharase,
	Lists,
	List,
} from "./style";
import { LanguageContext } from "@/app/contexts/languageContext";
import { useTypewriter, Cursor } from "react-simple-typewriter";
export default function BoxTwo() {
	const { language } = useContext(LanguageContext) || {};
	const [text] = useTypewriter({
		words: ["FullStack", "FrontEnd", "BackEnd"],
		loop: 0,
	});
	return (
		<BoxTwoContainer>
			<Content>
				<Pharase>
					{language === "Portuguese"
						? "Olá Pessoas, meu nome é"
						: "Hi There, My name is "}{" "}
					<Name>Kristofer Krindges</Name>
				</Pharase>
				<Pharase>
					{language === "Portuguese" ? "Eu sou um desenvolvedor" : "I am a"}{" "}
				</Pharase>
				<Pharase style={{ color: "#2c2c6c" }}>
					{text} <Cursor />
				</Pharase>
				<Lists>
					<List>
						{language === "Portuguese" ? "Projetos" : "Projects"}
						<span>10+</span>
					</List>
					<List>
						{language === "Portuguese" ? "Experiência" : "Experience"}
						<span>2+</span>
					</List>
				</Lists>
				<Button>Download CV</Button>
			</Content>
		</BoxTwoContainer>
	);
}

// Hello there!!
// I Am Kristofer Krindges.
// Você acabou de encontrar o seu desenvolvedor fullstack, frontend, backend
