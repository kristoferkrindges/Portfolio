import styled from "styled-components";

export const ContainerSideTop = styled.div`
	background: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	padding: 0.5rem 1rem;
	border-radius: 0 0 2rem 2rem;
	margin: 0 auto;
	width: 80%;
	display: flex;
	justify-content: space-between;
	align-items: center;

	position: sticky;
	top: 0;
	z-index: 999;

	@media only screen and (max-width: 999px) {
		display: none;
	}
`;
export const LeftSideTop = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.5rem;
	text-align: center;

	& svg {
		font-size: 2rem;
		color: ${({ theme }) => theme.text};
	}
`;

export const MidSideTop = styled.div``;

export const RightSideTop = styled.div`
	position: relative;
	display: flex;
	align-items: center;
	gap: 1.5rem;
`;

export const Title = styled.h1`
	width: 100%;
	text-transform: uppercase;
	font-size: 1rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.text};
`;

export const Photo = styled.img`
	width: 45px;
	height: 45px;
	border-radius: 50%;
	object-fit: cover;
	cursor: pointer;

	&:hover {
		transform: rotate(-10deg);
		cursor: pointer;
		opacity: 0.7;
	}
`;
