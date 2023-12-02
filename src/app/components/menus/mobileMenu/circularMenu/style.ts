import styled from "styled-components";

export const CircularContainer = styled.div`
	& .active {
		background: ${({ theme }) => theme.container};
		box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
		transform: rotate(180deg);
	}
`;

export const CircularMenuContainer = styled.div`
	position: absolute;
	left: -64%;
	transform: translateY(-1%);
	width: 160px;
	height: 80px;
	z-index: 2;
	border-bottom-left-radius: 80px;
	border-bottom-right-radius: 80px;
	transform-origin: top center;
	transition: 0.5s ease-in-out;
`;

export const Circle = styled.ul`
	position: absolute;
	display: flex;
	justify-content: center;
	align-items: center;
	inset: 0;

	& li:nth-child(1) {
		transform: translate(50px, -15px);
	}

	& li:nth-child(2) {
		transform: translate(0, 15px);
	}

	& li:nth-child(3) {
		transform: translate(-50px, -15px);
	}
`;

export const ItemCircle = styled.li`
	display: flex;
	position: absolute;
	cursor: pointer;

	& svg {
		transform: rotate(180deg);
		font-size: 1.5rem;
	}

	&:hover {
		opacity: 0.7;
	}
`;
