import styled from "styled-components";

export const ScrollDown = styled.div`
	height: 50px;
	width: 30px;
	border: 2px solid black;
	background-color: ${({ theme }) => theme.secondColor};
	border-radius: 2rem;
	cursor: pointer;

	&::before,
	&::after {
		content: "";
		position: absolute;
		top: 5%;
		left: 37%;
		height: 10px;
		width: 10px;
		border: 2px solid white;
		transform: rotate(45deg);
		border-top: transparent;
		border-left: transparent;
		animation: scroll-down 1s ease-in-out infinite;
	}

	&::after {
		top: 20%;
		animation-delay: 0.3s;
	}

	@keyframes scroll-down {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
		60% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			top: 70%;
		}
	}
`;

export const ScrollUp = styled.div`
	height: 50px;
	width: 30px;
	border: 2px solid black;
	background-color: ${({ theme }) => theme.secondColor};
	border-radius: 2rem;
	cursor: pointer;

	&::before,
	&::after {
		content: "";
		position: absolute;
		bottom: 8%;
		left: 37%;
		height: 10px;
		width: 10px;
		border: 2px solid white;
		transform: rotate(45deg);
		border-bottom: transparent;
		border-right: transparent;
		animation: scroll-up 1s ease-in-out infinite;
	}

	&::after {
		bottom: 20%;
		animation-delay: 0.3s;
	}

	@keyframes scroll-up {
		0% {
			opacity: 0;
		}
		30% {
			opacity: 1;
		}
		60% {
			opacity: 1;
		}
		100% {
			opacity: 0;
			bottom: 70%;
		}
	}
`;
