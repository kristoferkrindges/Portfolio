import React, { useContext, useState } from "react";
import { LanguageContext } from "@/app/contexts/languageContext";
import {
	BoxTwoContactContainer,
	Top,
	Title,
	Inputs,
	Controller,
	Label,
	ContainerInput,
	InputName,
	TextInput,
	Area,
	TextArea,
	LabelText,
} from "./style";
import { Button } from "../../introduction/desktop/boxTwo/style";
import {
	ContactIcon,
	EmailIcon,
	KristoferIcon,
} from "@/app/components/icons/iO5Icons.styled";

export default function BoxTwoContact() {
	const { language } = useContext(LanguageContext) || {};

	const [nameChange, setNameChange] = useState();
	const [emailChange, setEmailChange] = useState();
	const [text, setText] = useState();

	return (
		<BoxTwoContactContainer>
			<Top>
				<Title>{language === "Portuguese" ? "Contato" : "Contact"}</Title>
				<ContactIcon />
			</Top>
			<Inputs>
				<Controller>
					<Label>{language === "Portuguese" ? "Nome" : "Name"}</Label>
					<ContainerInput>
						<InputName
							type="name"
							value={nameChange}
							onChange={(e) => {
								setNameChange(e.target.value);
							}}
							minlength="3"
							maxlength="31"
						/>
						<TextInput>
							<KristoferIcon />
						</TextInput>
					</ContainerInput>
				</Controller>
				<Controller>
					<Label>Email</Label>
					<ContainerInput>
						<InputName
							type="email"
							value={emailChange}
							onChange={(e) => {
								setEmailChange(e.target.value);
							}}
							minlength="3"
							maxlength="41"
						/>
						<TextInput>
							<EmailIcon />
						</TextInput>
					</ContainerInput>
				</Controller>
			</Inputs>
			<LabelText>
				{language === "Portuguese" ? "Menssagem" : "Message"}
			</LabelText>
			<Area>
				{/* <LabelText>{language === "Portuguese" ? "Nome" : "Name"}</LabelText> */}
				<TextArea
					rows="1"
					placeholder={
						language === "Portuguese"
							? "Digite sua menssagem..."
							: "Enter your message..."
					}
					onChange={(e) => {
						setText(e.target.value);
					}}
					maxLength={140}
				></TextArea>
				<Button>Submit</Button>
			</Area>
		</BoxTwoContactContainer>
	);
}
// style={{ top: `2.5rem`, padding: `0.6rem 7rem` }}
