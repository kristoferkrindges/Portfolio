import styled from "styled-components";

// export const Section = styled.section`
// 	position: relative;
// 	width: 100%;
// 	margin-top: 7rem;
// 	/* margin-bottom: 13rem; */
// 	@media only screen and (max-width: 900px) {
// 		margin-bottom: 8rem;
// 	}
// `;

export const Section = styled.section`
	position: relative;
	width: 100%;
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	max-height: 100%;
	/* margin-bottom: 13rem; */
	@media only screen and (max-width: 900px) {
		margin-bottom: 6rem;
		margin-top: 4rem;
	}
`;

export const SeparatorSection = styled.div`
	display: flex;
	align-items: center;
	width: 100%;
	height: 100%;
	transition: 0.5s;
	padding: 1rem;
	gap: 2rem;
	@media only screen and (max-width: 1300px) {
		flex-wrap: wrap;
	}
`;
