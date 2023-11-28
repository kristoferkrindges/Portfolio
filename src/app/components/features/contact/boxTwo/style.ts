import styled from "styled-components";

export const BoxTwoContactContainer = styled.div`
	position: relative;
	width: 100%;
	padding: 1rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.container};
	/* border-bottom: 60px solid ${({ theme }) => theme.secondColor}; */
`;

export const Top = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0.5rem 1rem;
	svg {
		font-size: 1.5rem;
	}
`;

export const Title = styled.h3`
	font-weight: bold;
`;

export const Inputs = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-wrap: wrap;
	gap: 0.4rem 1rem;
	width: 100%;
	margin-top: 1.5rem;

	/* @media (max-width: 900px) {
		flex-direction: column;
	} */
`;
export const Controller = styled.div`
	display: flex;
	flex-direction: column;
	padding: 0 1rem;
	width: 100%;
	gap: 1rem;
`;

export const Label = styled.span`
	display: flex;
	justify-content: flex-start;
	margin-left: 1.2rem;
	font-size: 1.2em;
	color: ${({ theme }) => theme.text};
	font-weight: 600;

	@media (max-width: 700px) {
		font-size: 1em;
	}
`;

export const ContainerInput = styled.div`
	position: relative;
	height: 45px;
	width: 100%;
	font-size: 100%;
	background-color: rgba(0, 0, 0, 0.2);
	margin: auto;
	box-shadow: 0 5px 10px rgba(0, 0, 0, 0.25);
	border-radius: 25px;
	transition: all 0.3s ease;
	margin-bottom: 1.5rem;
`;
export const InputName = styled.input`
	position: absolute;
	height: 45px;
	width: 100%;
	border-radius: 25px;
	background: ${({ theme }) => theme.background};
	outline: none;
	padding-left: 20px;
	font-size: 1em;
	color: ${({ theme }) => theme.text};
	transition: background-color 0.5s ease-in;
	border: 1px solid ${({ theme }) => theme.background};
	transition: all 0.3s ease;

	&:focus {
		background-color: rgba(0, 0, 0, 0.1);
		color: #fff;
	}
`;

export const TextInput = styled.h3`
	position: absolute;
	right: -2px;
	top: 0;
	width: 40px;
	background-color: ${({ theme }) => theme.secondColor};
	height: 100%;
	border-radius: 0 25px 25px 0;
	text-align: center;
	line-height: 50px;
	color: #fff;
	font-size: 20px;
`;

export const TextArea = styled.textarea`
	background: ${({ theme }) => theme.background};
	outline: none;
	border: none;
	resize: none;
	scrollbar-width: none;
	width: 100%;
	min-height: 200px;
	border-radius: 2rem;
	padding: 1rem;

	color: ${({ theme }) => theme.text};

	@media (max-width: 540px) {
		font-size: 0.8rem;
	}
`;

export const Area = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	width: 100%;
	padding: 0 1rem;

	& button {
		top: 2.5rem;
		padding: 0.6rem 7rem;
	}

	@media (max-width: 540px) {
		& button {
			padding: 0.6rem 4rem;
		}
	}

	@media (max-width: 390px) {
		& button {
			padding: 0.6rem 2rem;
		}
	}
`;

export const LabelText = styled.span`
	display: flex;
	justify-content: flex-start;
	margin-left: 2rem;
	margin-top: 1rem;
	margin-bottom: 3%;
	font-size: 1.2em;
	color: ${({ theme }) => theme.text};
	font-weight: 600;

	@media (max-width: 700px) {
		font-size: 1em;
	}
`;
