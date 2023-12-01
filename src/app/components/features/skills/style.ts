import styled from "styled-components";

export const SeparatorCards = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	width: 100%;
	gap: 4rem 2rem;
	transition: 0.5s;
	padding: 1rem;
	@media only screen and (max-width: 1300px) {
		flex-wrap: wrap;
	}
`;

export const SeparatorSkills = styled.div`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 100%;
	gap: 4rem;
`;
