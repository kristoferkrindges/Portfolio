import styled from "styled-components";

export const BoxContainer = styled.div`
	position: relative;
	padding: 1rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.container};
	box-shadow: 0 0 0 10px ${({ theme }) => theme.container};
	width: 80vw;
	display: flex;
	align-items: center;
	gap: 1rem;
	justify-content: center;
	flex-direction: column;
	height: 440px;
	margin-top: 20rem;

	@media only screen and (max-width: 900px) {
		margin-top: 18.5rem;
		height: 350px;
		width: 95%;
	}

	@media only screen and (max-height: 837px) {
		margin-top: 15rem;
	}

	@media only screen and (max-height: 800px) {
		margin-top: 16.5rem;
		height: 350px;
	}

	@media only screen and (max-width: 440px) {
		height: 300px;
		margin-top: 12rem;
	}
`;

export const Circle = styled.div`
	position: absolute;
	top: -55%;
	width: 440px;
	height: 440px;
	background: ${({ theme }) => theme.background};
	border-radius: 50%;
	border: 10px solid transparent;

	@media only screen and (max-width: 900px) {
		top: -70%;
		width: 350px;
		height: 350px;
	}

	@media only screen and (max-height: 837px) {
		top: -54%;
		width: 330px;
		height: 330px;
	}

	@media only screen and (max-width: 477px) {
		top: -50%;
		width: 300px;
		height: 300px;
	}

	@media only screen and (max-width: 440px) {
		top: -50%;
		width: 260px;
		height: 260px;
	}
`;

export const Photo = styled.div`
	border-radius: 50%;

	.github {
		top: -80px;
		left: 185px;
	}

	.linkedin {
		top: 25%;
		left: -80px;
	}

	.gmail {
		top: 25%;
		right: -80px;
	}

	@media only screen and (max-width: 900px) {
		.github {
			top: -60px;
			left: 140px;
		}

		.linkedin {
			top: 25%;
			left: -60px;
		}

		.gmail {
			top: 25%;
			right: -60px;
		}
	}

	/* @media only screen and (max-width: 900px) {
		.github {
			top: -80px;
			left: 140px;
		}
	} */

	@media only screen and (max-height: 837px) {
		.github {
			top: -80px;
			left: 130px;
		}
	}

	@media only screen and (max-width: 477px) {
		.github {
			top: -80px;
			left: 110px;
		}
	}

	@media only screen and (max-width: 440px) {
		.github {
			top: -60px;
			left: 100px;
		}

		.linkedin {
			top: 25%;
			left: -60px;
		}

		.gmail {
			top: 25%;
			right: -60px;
		}
	}

	@media only screen and (max-width: 370px) {
		.github {
			top: -45px;
			left: 100px;
		}

		.linkedin {
			top: 25%;
			left: -45px;
		}

		.gmail {
			top: 25%;
			right: -45px;
		}
	}
`;

export const Pharase = styled.span`
	position: relative;
	top: 125px;
	font-size: 1.5rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.text};

	@media only screen and (max-width: 900px) {
		top: 70px;
		font-size: 1.3rem;
	}

	@media only screen and (max-height: 800px) {
		top: 95px;
		font-size: 1.2rem;
	}

	@media only screen and (max-width: 610px) {
		font-size: 1rem;
	}

	@media only screen and (max-width: 526px) {
		font-size: 0.8rem;
	}

	@media only screen and (max-width: 477px) {
		top: 70px;
	}

	@media only screen and (max-width: 440px) {
		font-size: 0.6rem;
	}

	@media only screen and (max-width: 365px) {
		font-size: 0.5rem;
	}
`;

export const Name = styled.span`
	text-transform: uppercase;
	font-size: 1.7rem;
	letter-spacing: 0.1rem;
	font-weight: 600;
	line-height: 1.1em;
	color: ${({ theme }) => theme.secondColor};

	@media only screen and (max-width: 900px) {
		font-size: 1.4rem;
	}

	@media only screen and (max-height: 800px) {
		font-size: 1.3rem;
	}

	@media only screen and (max-width: 610px) {
		font-size: 1.1rem;
	}

	@media only screen and (max-width: 526px) {
		font-size: 0.8rem;
	}

	@media only screen and (max-width: 440px) {
		font-size: 0.7rem;
	}

	@media only screen and (max-width: 365px) {
		font-size: 0.6rem;
	}
`;

export const Lists = styled.ul`
	position: relative;
	top: 140px;
	display: grid;
	grid-template-columns: repeat(2, 1fr);
	justify-content: space-evenly;
	width: 100%;
	padding: 0 10px;
	font-size: 1.3rem;

	@media only screen and (max-width: 900px) {
		top: 90px;
		font-size: 1.3rem;
	}

	@media only screen and (max-height: 800px) {
		top: 95px;
		font-size: 1.2rem;
	}

	@media only screen and (max-width: 610px) {
		font-size: 1rem;
	}

	@media only screen and (max-width: 526px) {
		font-size: 0.7rem;
	}
`;

export const List = styled.li`
	list-style: none;
	display: flex;
	flex-direction: column;
	text-align: center;
	padding: 0 10px;
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

export const Button = styled.button`
	position: relative;
	top: 135px;
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

	@media only screen and (max-width: 900px) {
		top: 95px;
	}

	@media only screen and (max-height: 800px) {
		top: 95px;
	}

	@media only screen and (max-width: 526px) {
		font-size: 0.7rem;
		top: 110px;
	}

	@media only screen and (max-width: 440px) {
		top: 90px;
	}
`;
