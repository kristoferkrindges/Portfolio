import styled from "styled-components";

export const Navigation = styled.div`
	background: ${({ theme }) => theme.container};
	width: 400px;
	height: 70px;
	display: flex;
	justify-content: center;
	align-items: center;
`;

export const Item = styled.li`
	position: relative;
	list-style: none;
	z-index: 1;
	width: 70px;
	height: 70px;

	& a {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		width: 100%;
		font-weight: 500;
		color: ${({ theme }) => theme.text};
	}

	&.active a .icon {
		transform: translateY(25px);
	}

	&.active a .text {
		opacity: 1;
		transform: translateY(-27px);
	}
`;

export const Indicator = styled.div`
	position: absolute;
	top: 40%;
	width: 70px;
	height: 70px;
	background: ${({ theme }) => theme.secondColor};
	border-radius: 50%;
	border: 6px solid ${({ theme }) => theme.background};
	transition: 0.5s;
`;
