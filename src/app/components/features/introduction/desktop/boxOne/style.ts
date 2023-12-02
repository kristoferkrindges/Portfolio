import styled from "styled-components";

export const BoxOneContainer = styled.div`
	position: relative;
	width: 100%;
	height: 400px;
	background-color: ${({ theme }) => theme.secondColor};
	/* box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4); */
	border-radius: 2rem;
	animation: progress 2s ease-in-out forwards;
	&::before {
		content: "";
		position: absolute;
		top: 93px;
		left: -1px;
		width: 23px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-bottom-left-radius: 20px;
		box-shadow: -6px 6px ${({ theme }) => theme.background};
	}
	&::after {
		content: "";
		position: absolute;
		/* bottom: -6px;
		left: 82px; */
		bottom: -6px;
		left: 248px;
		width: 23px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-bottom-left-radius: 20px;
		box-shadow: -6px 6px ${({ theme }) => theme.background};
	}

	@keyframes progress {
		0% {
			width: 0;
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const Modal = styled.div`
	position: absolute;
	inset: 0;
	overflow: hidden;
	border-radius: 2rem;
`;

export const Banner = styled.img`
	position: absolute;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;

export const Content = styled.div`
	display: flex;
	align-items: center;
	/* justify-content: center; */
	color: white;
	padding: 1rem;
`;
