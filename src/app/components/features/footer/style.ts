import styled from "styled-components";

export const FooterContainer = styled.div`
	background: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4);
	padding: 1rem 2rem;
	border-radius: 2rem 2rem 0 0;
	display: flex;
	width: 100%;
	justify-content: space-between;
	align-items: center;
	color: ${({ theme }) => theme.text};

	a {
		color: ${({ theme }) => theme.text};
	}

	.Icons svg {
		font-size: 1.5rem;
	}

	.Icons svg:hover {
		opacity: 0.7;
	}

	.Scroll {
		position: relative;
	}

	@media only screen and (max-width: 999px) {
		margin-bottom: 8rem;
		flex-direction: column;
		gap: 3rem;
		border-radius: 2rem;
		width: 100%;
		.Icons {
			gap: 4rem;
		}
	}

	@media (max-width: 1300px) {
		margin-top: 4rem;
	}
`;

export const ContextFooter = styled.div`
	@media only screen and (max-width: 999px) {
		padding: 1rem;
	}
`;

export const MidSide = styled.div`
	display: flex;
	align-items: center;
	flex-direction: column;
	justify-content: center;
	gap: 0.7rem;

	svg {
		font-size: 1.6rem;
	}
`;

export const Subtitle = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	gap: 0.3rem;
	text-align: center;

	@media only screen and (max-width: 999px) {
		flex-direction: column;
		gap: 1rem;
	}
`;

export const Span = styled.span`
	font-weight: 600;
	font-size: 0.9rem;
`;
