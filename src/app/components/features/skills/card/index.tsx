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
import { ArrowDownIcon } from "@/app/components/icons/iOIcons.styled";
import Porcents from "../porcents";

export default function Card({ name, icon }) {
	const { language } = useContext(LanguageContext) || {};

	const [porcents, setPorcents] = useState(false);

	return (
		<CardContainer
			style={
				porcents
					? { height: `560px`, transitionDelay: `0.5s` }
					: { height: `100px`, marginBottom: `5rem` }
			}
		>
			<ContextContainer>
				<ImgBox>{icon}</ImgBox>
				<Content>
					<Name>{name}</Name>
				</Content>
				<Toggle onClick={() => setPorcents(porcents ? false : true)}>
					<ArrowDownIcon style={porcents && { transform: `rotate(-180deg)` }} />
				</Toggle>
			</ContextContainer>
			<PorcentsContainer
				style={porcents ? { height: `400px`, transitionDelay: `0.7s` } : {}}
			>
				<Porcents porcent={porcents} number={0} />
				<Porcents porcent={porcents} number={1} />
				<Porcents porcent={porcents} number={3} />
				<Porcents porcent={porcents} number={4} />
			</PorcentsContainer>
		</CardContainer>
	);
}
