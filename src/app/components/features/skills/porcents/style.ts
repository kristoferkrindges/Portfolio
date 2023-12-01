import styled from "styled-components";

export const ContactItem = styled.li`
	padding: 1rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.container};
	display: flex;
	align-items: center;
	gap: 1rem;
	width: 90%;
	transition: 0.5s;
	opacity: 0;
	transform: scale(0);

	@media only screen and (max-width: 505px) {
		width: 100%;
	}
`;
