import styled from "styled-components";

export const Card = styled.div`
	display: none;
	@media only screen and (max-width: 999px) {
		display: flex;
		align-items: center;
		justify-content: center;
		margin-top: 14rem;
		/* margin-bottom: 5rem; */
		width: 100%;
		min-height: 70vh;
		padding: 1rem;
	}
	@media only screen and (max-width: 899px) {
		margin-top: 12rem;
	}
	@media only screen and (max-width: 477px) {
		margin-top: 9rem;
	}

	@media only screen and (max-height: 667px) {
		/* margin-top: 11rem; */
		min-height: 80vh;
	}

	@media only screen and (max-height: 720px) {
		/* margin-top: 11rem; */
		min-height: 98vh;
	}
`;
