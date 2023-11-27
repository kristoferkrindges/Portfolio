import styled from "styled-components";

export const BoxOneContainer = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	gap: 1rem;
	/* border-radius: 2rem;
	padding: 1rem;
	background-color: ${({ theme }) => theme.container}; */
	width: 100%;

	@media only screen and (max-width: 1300px) {
		margin-bottom: 1.5rem;
	}
`;

export const Card = styled.div`
	display: flex;
	width: 100%;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	@media only screen and (max-width: 871px) {
		flex-wrap: wrap;
	}
	/* height: 770px; */
`;

export const Cards = styled.div`
	padding: 1rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.secondColor};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
	width: 100%;
	display: flex;
	align-items: center;
	justify-content: center;
	flex-direction: column;
	color: #ffff;
`;

export const Chart = styled.div`
	svg {
		font-size: 3rem;
	}
	@media only screen and (max-width: 1629px) {
		svg {
			font-size: 2.7rem;
		}
	}
`;

export const EarningsText = styled.h3`
	text-align: center;
	padding: 0.4rem 0;
	font-size: 1.5rem;
	margin-bottom: 20px;
	@media only screen and (max-width: 1629px) {
		font-size: 1.2rem;
	}
`;

export const Time = styled.h2`
	text-align: center;
	font-weight: normal;
	font-size: 1.1rem;
	@media only screen and (max-width: 1629px) {
		font-size: 0.8rem;
	}
`;

export const Content = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.05);
	padding: 1rem;
	background: ${({ theme }) => theme.container};
	border-radius: 2rem;
	width: 100%;
`;

export const Text = styled.p`
	font-size: 1.3rem;
	line-height: 1.5;
	font-weight: 500;
	padding: 0.5rem;
`;

export const Skills = styled.div`
	padding: 1rem;
	border-radius: 2rem;
	/* background: ${({ theme }) => theme.secondColor}; */
	/* width: 100%; */
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 1rem;
	flex-wrap: wrap;
`;
