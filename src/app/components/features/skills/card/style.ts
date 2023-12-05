import styled from "styled-components";

interface SocialButtonProps
	extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	color: string;
}

export const CardContainer = styled.div`
	position: relative;
	transition: 0.5s;
	width: 100%;
	height: 100px;
	transition-delay: 0.5s;

	@media only screen and (max-width: 1322px) {
		width: 85%;
	}
	@media only screen and (max-width: 1300px) {
		width: 100%;
	}
`;

export const ContextContainer = styled.div`
	position: relative;
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
	width: 120px;
	height: 120px;
	border-radius: 50%;
	background-color: ${({ theme }) => theme.container};
	border: 6px solid ${({ theme }) => theme.background};
	overflow: hidden;
	padding: 1rem;
	transition: 0.5s;
	z-index: 10;

	svg {
		width: 100%;
		height: 100%;
	}
`;

export const Content = styled.div`
	position: relative;
	text-align: center;
`;

export const Name = styled.h2`
	text-transform: uppercase;
	font-size: 1.4rem;
	letter-spacing: 0.5rem;
	line-height: 1.1em;
	font-weight: 600;
	color: white;
`;

export const Toggle = styled.span`
	position: absolute;
	bottom: 0;
	right: 2rem;
	padding: 1rem;
	background: ${({ theme }) => theme.textInverse};
	border-radius: 30px;
	transform: translateY(50%);
	border: 4px solid ${({ theme }) => theme.background};
	cursor: pointer;
	display: flex;
	align-items: center;
	justify-content: center;
	font-weight: bold;
	transition: 0.5s;
	color: ${({ theme }) => theme.text};

	&:hover {
		opacity: 0.7;
	}
	& svg {
		font-size: 1.5rem;
		transition: 1s;
	}
`;

export const PorcentsContainer = styled.ul`
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
