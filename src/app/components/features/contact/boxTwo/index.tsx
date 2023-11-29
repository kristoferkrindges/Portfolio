import React, { ChangeEvent, useContext, useState } from "react";
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
	ContentError,
} from "./style";
import { Button } from "../../introduction/desktop/boxTwo/style";
import {
	ContactIcon,
	EmailIcon,
	KristoferIcon,
} from "@/app/components/icons/iO5Icons.styled";
import { ApiEmailContext } from "@/app/contexts/apiEmailContext";
import { TailSpin } from "react-loader-spinner";
import sendEmail from "@/app/api/email/send/apiEmail";

interface CustomInputProps {
	type: "name" | "email";
	value: string | undefined;
	onChange: (e: ChangeEvent<HTMLInputElement>) => void;
	minLength: number;
	maxLength: number;
}

export default function BoxTwoContact() {
	const { language } = useContext(LanguageContext) || {};
	const { getEmail } = useContext(ApiEmailContext) || {};

	const [nameChange, setNameChange] = useState<string | undefined>(undefined);
	const [emailChange, setEmailChange] = useState<string | undefined>(undefined);
	const [text, setText] = useState<string | undefined>(undefined);
	const [contentError, setContentError] = useState<string | undefined>(
		undefined
	);
	const [loader, setLoader] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);

	const myServerFunction = async () => {
		if (!nameChange) {
			setError(true);
			setContentError(
				language === "Portuguese" ? "Nome é obrigatório!" : "Name is required!"
			);
			return;
		}
		if (!emailChange) {
			setError(true);
			setContentError(
				language === "Portuguese"
					? "Email é obrigatório!"
					: "Email is required!"
			);
			return;
		}
		if (!text) {
			setError(true);
			setContentError(
				language === "Portuguese"
					? "Menssagem é obrigatório!"
					: "Menssagem is required!"
			);
			return;
		}

		try {
			setLoader(true);
			const result = await sendEmail({
				from: "onboarding@resend.dev",
				to: "thecontt06@gmail.com",
				subject: "Portfolio CONTACT email",
				text: `The People ${nameChange} send a message: @@ ${text} @@ .com o email ${emailChange}`,
			});
			setError(false);
			setLoader(false);
			setContentError(
				language === "Portuguese"
					? "Email enviado com sucesso!"
					: "Email successfully sent!"
			);
			return;
		} catch (error) {
			console.error(error);
			setError(false);
			setLoader(false);
			setContentError(
				language === "Portuguese"
					? "Email enviado com sucesso!"
					: "Email successfully sent!"
			);
			return;
		}
	};

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
							onChange={(e: ChangeEvent<HTMLInputElement>) => {
								setNameChange(e.target.value);
							}}
							minLength={3}
							maxLength={31}
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
							minLength={3}
							maxLength={41}
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
				<TextArea
					rows={1}
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
				{contentError && (
					<ContentError style={error ? { color: `red` } : { color: `green` }}>
						{contentError}
					</ContentError>
				)}
				<Button onClick={myServerFunction}>
					{loader ? (
						<TailSpin
							height="20"
							width="20"
							color="#ffff"
							ariaLabel="tail-spin-loading"
							radius="1"
							wrapperStyle={{}}
							wrapperClass=""
							visible={true}
						/>
					) : (
						"Submit"
					)}
				</Button>
			</Area>
		</BoxTwoContactContainer>
	);
}
// style={{ top: `2.5rem`, padding: `0.6rem 7rem` }}
