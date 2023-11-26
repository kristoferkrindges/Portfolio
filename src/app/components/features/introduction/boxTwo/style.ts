import styled from "styled-components";

export const BoxTwoContainer = styled.div`
	position: relative;
	width: 90%;
	height: 350px;
	background-color: ${({ theme }) => theme.container};
	border-radius: 2rem;
	box-shadow: 5px 5px 10px rgba(0, 0, 0, 0.4);

	&::before {
		content: "";
		position: absolute;
		bottom: 95px;
		left: -1px;
		width: 20px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-top-left-radius: 20px;
		box-shadow: -6px -6px ${({ theme }) => theme.background};
	}
	&::after {
		content: "";
		position: absolute;
		top: -1px;
		left: 245px;
		width: 20px;
		height: 20px;
		background-color: transparent;
		z-index: 10;
		border-top-left-radius: 20px;
		box-shadow: -6px -6px ${({ theme }) => theme.background};
	}
`;

export const Content = styled.div`
	position: absolute;
	inset: 0;
	padding: 1.7rem 0.7rem 1.2rem;
	display: flex;
	align-items: center;
	flex-direction: column;
	gap: 1rem;
	text-align: center;
	margin-left: 8rem;
`;

export const Button = styled.button`
	position: relative;
	top: 100px;
	border: none;
	outline: none;
	background: ${({ theme }) => theme.secondColor};
	display: inline-block;
	padding: 0.6rem 2rem;
	font-weight: 500;
	border-radius: 2rem;
	cursor: pointer;
	transition: all 300ms ease;
	color: white;
	font-size: 1rem;
	border: 4px solid transparent;
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	/* box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.4); */
	transition: 0.5s;
	/* text-transform: uppercase;
	letter-spacing: 0.2em; */
	&::before {
		content: "";
		position: absolute;
		top: 5px;
		left: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-right-radius: 20px;
		box-shadow: 5px -7px ${({ theme }) => theme.container};
	}
	&::after {
		content: "";
		position: absolute;
		top: 5px;
		right: -29px;
		width: 20px;
		height: 20px;
		background: transparent;
		border-top-left-radius: 20px;
		box-shadow: -5px -7px ${({ theme }) => theme.container};
	}
	&:hover {
		opacity: 0.8;
		letter-spacing: 0.5em;
	}
`;

export const Pharase = styled.span`
	/* text-transform: uppercase; */
	font-size: 1.3rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.text};

	@media only screen and (max-width: 1700px) {
		font-size: 1rem;
	}
`;

export const Name = styled.span`
	text-transform: uppercase;
	font-size: 1.4rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.secondColor};

	@media only screen and (max-width: 1700px) {
		font-size: 1.1rem;
	}

	@media only screen and (max-width: 1468px) {
		font-size: 0.9rem;
	}
`;

export const Lists = styled.ul`
	position: relative;
	top: 50px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-evenly;
	width: 100%;
	padding: 0 10px;
`;

export const List = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 10px;
	font-size: 1.3rem;
	font-weight: 500;
	color: ${({ theme }) => theme.text};
	&:not(:last-child) {
		border-right: 2px solid ${({ theme }) => theme.text};
	}
	span {
		font-size: 1.65em;
		color: ${({ theme }) => theme.text};
	}
`;
