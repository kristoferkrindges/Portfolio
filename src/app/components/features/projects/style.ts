import styled from "styled-components";

export const ProjectSection = styled.section`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	@media only screen and (max-width: 900px) {
		margin-top: 4rem;
	}
`;

export const Cards = styled.div`
	position: relative;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	padding: 1rem;
	gap: 2rem 1.8rem;
	flex-wrap: wrap;
`;
