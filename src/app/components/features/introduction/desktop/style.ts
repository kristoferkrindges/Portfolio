import styled from "styled-components";

export const BoxContainer = styled.section`
	margin-top: 2rem;
	display: flex;
	justify-content: end;
	@media only screen and (max-width: 1478px) {
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
	margin-bottom: 3.7rem;

	@media only screen and (max-width: 1200px) {
		display: none;
	}
`;
