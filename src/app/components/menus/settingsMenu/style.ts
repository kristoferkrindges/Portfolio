import styled from "styled-components";

export const DropMenu = styled.div`
	position: absolute;
	bottom: 110%;
	right: -40%;
	background: ${({ theme }) => theme.container};
	padding: 10px 10px;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.7);
	border-radius: 2rem;
	padding: 10px;
	width: 160px;
	transition: all 0.3s ease;
	z-index: 999;
	display: flex;
	flex-direction: column;
`;

export const Item = styled.div`
	display: flex;
	gap: 0.5rem;
	padding: 1rem;
	border-radius: 2rem;
	font-weight: bold;
	& svg {
		font-size: 1.2rem;
	}

	&:hover {
		background: ${({ theme }) => theme.secondColor};
		color: ${({ theme }) => theme.textInverse};
	}
`;

export const Text = styled.p``;
