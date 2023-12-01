import React, { useContext, useState } from "react";
import { LanguageContext } from "@/app/contexts/languageContext";
import {
	CardContainer,
	ContextContainer,
	ImgBox,
	Content,
	Name,
	Toggle,
	PorcentsContainer,
} from "./style";
import { ReactIcon } from "@/app/components/icons/iO5Icons.styled";
import {
	ArrowDownIcon,
	CsslIcon,
	HtmlIcon,
} from "@/app/components/icons/iOIcons.styled";
import Porcents from "../porcents";
import {
	CreativityIcon,
	GitIcon,
	JavaIcon,
	NodeIcon,
	PythonIcon,
} from "@/app/components/icons/fAIcons.styled";
import {
	CSharpIcon,
	DotNetIcon,
	FigmaIcon,
	PhotoshopIcon,
	PostmanIcon,
	VsCodeIcon,
} from "@/app/components/icons/sIIcons.styled";
import { WebIcon } from "@/app/components/icons/mDIcons.styled";

interface CardProps {
	name: string;
	icon: React.ReactNode;
}

export default function Card({ name, icon }: CardProps) {
	const { language } = useContext(LanguageContext) || {};

	const [porcentsState, setPorcentsState] = useState(false);

	const skills = {
		Frontend: [
			{ number: 1, name: "HTML", porcents: "90", icon: <HtmlIcon /> },
			{ number: 2, name: "CSS", porcents: "85", icon: <CsslIcon /> },
			{ number: 3, name: "REACT", porcents: "80", icon: <ReactIcon /> },
			{
				number: 4,
				name: "REACT-NATIVE",
				porcents: "70",
				icon: <ReactIcon />,
			},
		],
		Backend: [
			{ number: 1, name: "NODE", porcents: "80", icon: <NodeIcon /> },
			{ number: 2, name: "JAVA", porcents: "75", icon: <JavaIcon /> },
			{ number: 3, name: "C#", porcents: "60", icon: <CSharpIcon /> },
			{
				number: 4,
				name: "PYTHON",
				porcents: "50",
				icon: <PythonIcon />,
			},
		],
		Ux: [
			{
				number: 1,
				name: `${language === "Portuguese" ? "CRIATIVIDADE" : "CREATIVITY"}`,
				porcents: "80",
				icon: <CreativityIcon />,
			},
			{ number: 2, name: "WEB-DESIGN", porcents: "70", icon: <WebIcon /> },
			{ number: 3, name: "FIGMA", porcents: "60", icon: <FigmaIcon /> },
			{
				number: 4,
				name: "PHOTOSHOP",
				porcents: "35",
				icon: <PhotoshopIcon />,
			},
		],
		Tools: [
			{ number: 1, name: "VsCode", porcents: "95", icon: <VsCodeIcon /> },
			{ number: 2, name: "POSTMAN", porcents: "85", icon: <PostmanIcon /> },
			{
				number: 3,
				name: "GIT",
				porcents: "75",
				icon: <GitIcon />,
			},
			{
				number: 4,
				name: "PHOTOSHOP",
				porcents: "35",
				icon: <PhotoshopIcon />,
			},
		],
	};
	return (
		<CardContainer
			style={
				porcentsState
					? { height: `590px`, transitionDelay: `0.5s` }
					: { height: `100px`, marginBottom: `5rem` }
			}
		>
			<ContextContainer>
				<ImgBox>{icon}</ImgBox>
				<Content>
					<Name>{name}</Name>
				</Content>
				<Toggle onClick={() => setPorcentsState(porcentsState ? false : true)}>
					<ArrowDownIcon
						style={porcentsState && { transform: `rotate(-180deg)` }}
					/>
				</Toggle>
			</ContextContainer>
			<PorcentsContainer
				style={
					porcentsState ? { height: `400px`, transitionDelay: `0.7s` } : {}
				}
			>
				{name === "FRONTEND" && (
					<>
						{skills.Frontend.map((skill) => (
							<Porcents
								key={skill.number}
								porcentsState={porcentsState}
								{...skill}
							/>
						))}
					</>
				)}
				{name === "BACKEND" && (
					<>
						{skills.Backend.map((skill) => (
							<Porcents
								key={skill.number}
								porcentsState={porcentsState}
								{...skill}
							/>
						))}
					</>
				)}
				{name === "UX-DESIGN" && (
					<>
						{skills.Ux.map((skill) => (
							<Porcents
								key={skill.number}
								porcentsState={porcentsState}
								{...skill}
							/>
						))}
					</>
				)}
				{name === "Tools" ||
					(name === "Ferramentas" && (
						<>
							{skills.Tools.map((skill) => (
								<Porcents
									key={skill.number}
									porcentsState={porcentsState}
									{...skill}
								/>
							))}
						</>
					))}
			</PorcentsContainer>
		</CardContainer>
	);
}
