import styled from "styled-components";

export const ProjectSection = styled.section`
	position: relative;
	width: 100%;
	margin-top: 8rem;
	margin-bottom: 2rem;
	/* min-height: 100vh; */
	/* @media only screen and (max-width: 900px) {
		margin-bottom: 8rem;
	} */
`;

export const Cards = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	/* gap: 1.5rem; */
	gap: 1.5rem 1rem;
	flex-wrap: wrap;

	@media only screen and (max-width: 1300px) {
		/* flex-wrap: wrap; */
	}
`;
