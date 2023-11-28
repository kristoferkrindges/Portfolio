import styled from "styled-components";

export const CardContainer = styled.div`
	position: relative;
	position: relative;
	display: flex;
	justify-content: center;
	align-items: flex-start;
	width: 32%;
	/* width: 440px; */
	height: 380px;
	background-color: ${({ theme }) => theme.secondColor};
	border-radius: 2rem;
	box-shadow: 0 35px 80px rgba(0, 0, 0, 0.15);
	transition: 0.5s;

	&::before {
		content: "";
		position: absolute;
		height: 85%;
		width: 100%;
		background: ${({ theme }) => theme.container};
		border-radius: 20px 20px 0 0;
	}

	&:hover {
		height: 480px;
	}

	&:hover .imgBx {
		top: -100px;
		scale: 0.75;
		box-shadow: 0 15px 45px rgba(0, 0, 0, 0.2);
	}

	&:hover .content {
		height: 350px;
		top: 110px;
	}

	@media only screen and (max-width: 1629px) {
		width: 48%;
	}

	@media only screen and (max-width: 900px) {
		width: 100%;
	}
`;

export const ImageBox = styled.div`
	position: absolute;
	top: 20px;
	width: 90%;
	height: 220px;
	/* background-color: ${({ theme }) => theme.secondColor}; */
	border-radius: 2rem;
	overflow: hidden;
	transition: 0.5s;
	z-index: 500;
`;

export const ImageProject = styled.img`
	position: absolute;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	position: absolute;
	width: 100%;
	height: 30px;
	overflow: hidden;
	top: 252px;
	padding: 0 30px;
	text-align: center;
	transition: 0.5s;
`;

export const Title = styled.h2`
	font-size: 1.5em;
	font-weight: 700;
	margin-bottom: 0.5rem;
	color: ${({ theme }) => theme.text};
`;

export const Phrase = styled.p`
	color: ${({ theme }) => theme.text};
	font-size: 1.05em;
`;

export const Social = styled.div`
	position: absolute;
	bottom: 2%;
	display: flex;
	gap: 2rem;
	width: 100%;
	align-items: center;
	margin-top: 1.3rem;
	justify-content: center;
	font-size: 0.7rem;
`;

export const Icons = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	margin-top: 1rem;
`;
