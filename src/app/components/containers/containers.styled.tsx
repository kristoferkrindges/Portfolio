import styled from "styled-components";

export const Section = styled.section`
	position: relative;
	width: 100%;
	margin-top: 7rem;
	/* margin-bottom: 13rem; */
	@media only screen and (max-width: 900px) {
		margin-bottom: 8rem;
	}
`;

export const SeparatorSection = styled.div`
	display: flex;
	/* align-items: center; */
	transition: 0.5s;
	padding: 1rem;
	gap: 2rem;
	@media only screen and (max-width: 1300px) {
		flex-wrap: wrap;
	}
`;
