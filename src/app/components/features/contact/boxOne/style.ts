import styled from "styled-components";

interface SocialButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor: string;
}

export const BoxOneContactContainer = styled.div`
	position: relative;
	transition: 0.5s;
	width: 80%;
	height: 100px;
	transition-delay: 0.5s;

	@media only screen and (max-width: 1322px) {
		width: 85%;
	}
	@media only screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const User = styled.div`
	position: relative;
	/* width: 400px; */
	width: 100%;
	min-height: 150px;
	background: ${({ theme }) => theme.secondColor};
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	gap: 10px;
	border-radius: 2rem;
	padding: 60px 40px 30px;
`;

export const ImgBox = styled.div`
	position: absolute;
	top: 0;
	transform: translateY(-50%);
	width: 100px;
	height: 100px;
	border-radius: 50%;
	border: 6px solid ${({ theme }) => theme.background};
	overflow: hidden;
	transition: 0.5s;
	z-index: 10;
`;

export const Photo = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: relative;
	text-align: center;
`;

export const Name = styled.h2`
	font-size: 1.2em;
	line-height: 1.05em;
	font-weight: 600;
	color: white;
	margin-bottom: 0.5rem;
`;

export const Span = styled.span`
	font-size: 0.8em;
	font-weight: 400;
	color: white;
`;

export const Toggle = styled.span`
	position: absolute;
	bottom: 0;
	width: 120px;
	padding: 5px 15px;
	background: ${({ theme }) => theme.text};
	border-radius: 30px;
	transform: translateY(50%);
	border: 5px solid ${({ theme }) => theme.background};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	transition: 0.5s;
	color: ${({ theme }) => theme.textInverse};

	&:hover {
		opacity: 0.7;
	}
`;

export const Contacts = styled.ul`
	position: relative;
	top: 30px;
	width: 100%;
	height: 0;
	overflow: hidden;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	gap: 2rem;
	transition: 0.5s;
`;

export const ContactItem = styled.li`
	padding: 1rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.container};
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 90%;
	border-left: 15px solid ${({ theme }) => theme.secondColor};
	transition: 0.5s;
	opacity: 0;
	transform: scale(0);

	@media only screen and (max-width: 505px) {
		width: 100%;
	}
`;

export const ButtonSocial = styled.button<SocialButtonProps>`
	position: relative;
	font-size: 2em;
	border: none;
	border-radius: 50%;
	box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.25);
	width: 2em;
	height: 2em;
	cursor: pointer;
	overflow: hidden;
	color: #fff;
	z-index: 1;
	transition: color 0.2s ease-in-out;
	background-color: ${(prop) => prop.backgroundColor};

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-color: ${({ theme }) => theme.secondColor};
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform 0.2s ease-in-out;
	}

	&:hover,
	&:focus {
		/* color: black; */
	}

	&:hover::before,
	&:focus::before {
		transform: scaleY(1);
	}

	@media only screen and (max-width: 480px) {
		font-size: 1.7em;
		width: 1.7em;
		height: 1.7em;
	}
`;

export const HiperLink = styled.p`
	@media only screen and (max-width: 468px) {
		font-size: 0.9rem;
	}

	@media only screen and (max-width: 415px) {
		font-size: 0.7rem;
	}
`;
