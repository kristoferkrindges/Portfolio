import styled from "styled-components";

interface SocialButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	backgroundColor: string;
}

export const BoxOneContainer = styled.div`
	position: absolute;
	top: 20%;
	left: 250px;
`;

export const Photo = styled.div`
	position: relative;
	width: 32rem;
	height: 32rem;
	background: ${({ theme }) => theme.background};
	border-radius: 50%;
	border: 10px solid transparent;

	.github {
		top: -50px;
		left: 50px;
	}

	.linkedin {
		bottom: -50px;
		left: 50px;
	}

	.gmail {
		top: 45%;
		left: -90px;
	}
`;

export const Social = styled.div`
	position: absolute;
`;

export const MyPicture = styled.img`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

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
	color: ${(prop) => prop.backgroundColor};
	z-index: 1;
	transition: color 0.2s ease-in-out;

	&::before {
		content: "";
		position: absolute;
		top: 0;
		left: 0;
		right: 0;
		bottom: 0;
		z-index: -1;
		background-color: ${(prop) => prop.backgroundColor};
		transform: scaleY(0);
		transform-origin: bottom;
		transition: transform 0.2s ease-in-out;
	}

	&:hover,
	&:focus {
		color: #fff;
	}

	&:hover::before,
	&:focus::before {
		transform: scaleY(1);
	}
`;
