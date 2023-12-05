import styled from "styled-components";

export const DesktopContainer = styled.section`
	width: 100%;
`;

export const BoxContainer = styled.div`
	display: flex;
	width: 100%;
	margin-top: 3rem;
	justify-content: end;

	@media only screen and (max-width: 1539px) {
		margin-bottom: 4rem;
		margin-top: 2rem;
	}

	@media only screen and (max-width: 1509px) {
		margin-top: 2rem;
		margin-bottom: 5rem;
	}
	@media only screen and (max-width: 999px) {
		display: none;
	}
`;

export const Card = styled.div`
	position: relative;
	background-color: ${({ theme }) => theme.background};
	height: 770px;
	width: 80%;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;
