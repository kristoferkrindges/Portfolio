import React, { useContext } from "react";
import {
	BoxContainer,
	Pharase,
	Name,
	Circle,
	Photo,
	Button,
	List,
	Lists,
} from "./style";
import Link from "next/link";
import { LanguageContext } from "@/app/contexts/languageContext";
import { useTypewriter, Cursor } from "react-simple-typewriter";
import KristoferPhoto from "../../../../../assets/images/kristofer.png";
import { MyPicture, Social } from "../../desktop/circle/style";
import SocialButtons from "@/app/components/buttons/socialButtons";

export default function Box() {
	const { language } = useContext(LanguageContext) || {};
	const fileName = "KristoferKrindges_DesenvolvedorDeSoftware";
	const [text] = useTypewriter({
		words: ["FullStack", "FrontEnd", "BackEnd"],
		loop: 0,
	});
	return (
		<BoxContainer>
			<Circle>
				<Photo>
					<MyPicture src={KristoferPhoto.src} />
					<Social className="github">
						<SocialButtons type={"Github"} />
					</Social>
					<Social className="linkedin">
						<SocialButtons type={"Linkedin"} />
					</Social>
					<Social className="gmail">
						<SocialButtons type={"Gmail"} />
					</Social>
				</Photo>
			</Circle>
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
		</BoxContainer>
	);
}