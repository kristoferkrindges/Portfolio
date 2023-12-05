import styled from "styled-components";

interface SocialButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: string;
}

export const SocialButton = styled.button<SocialButtonProps>`
	position: relative;
	font-size: 2em;
	border: none;
	border-radius: 50%;
	box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);
	width: 2em;
	height: 2em;
	cursor: pointer;
	overflow: hidden;
	color: ${(prop) => prop.color};
	z-index: 1;
	transition: color 0.2s ease-in-out;
	background-color: ${({ theme }) => theme.container};

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-color: ${(prop) => prop.color};
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform 0.2s ease-in-out;
	}

	&:hover,
	&:focus {
		color: ${({ theme }) => theme.textInverse};
	}

	&:hover::before,
	&:focus::before {
		transform: scaleY(1);
	}

	@media only screen and (max-width: 1700px) {
		width: 1.8em;
		height: 1.8em;
		font-size: 1.8em;
	}

	@media only screen and (max-width: 1488px) {
		width: 1.7em;
		height: 1.7em;
		font-size: 1.7em;
	}

	@media only screen and (max-width: 1000px) {
		width: 1.74em;
		height: 1.74em;
		font-size: 1.74em;
	}

	@media only screen and (max-width: 440px) {
		width: 1.7em;
		height: 1.7em;
		font-size: 1.7em;
	}

	@media only screen and (max-width: 370px) {
		width: 1.5em;
		height: 1.5em;
		font-size: 1.5em;
	}
`;
