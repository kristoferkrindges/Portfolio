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
import Link from "next/link";

export default function BoxTwo() {
	const { language } = useContext(LanguageContext) || {};
	const [text] = useTypewriter({
		words: ["FullStack", "FrontEnd", "BackEnd"],
		loop: 0,
	});
	const fileName = "KristoferKrindges_DesenvolvedorDeSoftware";
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
				<Pharase style={{ color: "#2c2c6c", fontSize: "2rem" }}>
					<Name>
						{text} <Cursor />
					</Name>
				</Pharase>
				<Lists>
					<List>
						{language === "Portuguese" ? "Projetos" : "Projects"}
						<span>8+</span>
					</List>
					<List>
						{language === "Portuguese" ? "Experiência" : "Experience"}
						<span>2+</span>
					</List>
				</Lists>
				<Link
					href="/pdf/KristoferKrindgesDesenvolvedorDeSoftware.pdf"
					target="_blank"
					download={fileName}
				>
					<Button>Download CV</Button>
				</Link>
			</Content>
		</BoxTwoContainer>
	);
}
