import styled from "styled-components";

export const BoxTwoContainer = styled.div`
	background: ${({ theme }) => theme.container};
	border-radius: 2rem;
	padding: 1rem;
	position: relative;
	box-shadow: 0 5px 40px rgba(0, 0, 0, 0.6);
	transition: opacity 0.5s ease-out;
	width: 100%;
	&::before {
		content: "";
		position: absolute;
		height: 35%;
		width: 96.5%;
		background: ${({ theme }) => theme.secondColor};
		border-radius: 2rem;
	}

	@media only screen and (max-width: 720px) {
		&::before {
			width: 95%;
		}
	}

	@media only screen and (max-width: 537px) {
		&::before {
			width: 93%;
		}
	}

	@media only screen and (max-width: 500px) {
		&::before {
			width: 90%;
		}
	}
`;

export const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 30px;
	position: relative;
	z-index: 100;
	width: 100%;
`;
export const Icons = styled.div`
	position: absolute;
	top: 15px;
	right: 25px;
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 2rem;
	color: #ffff;
	svg {
		font-size: 1.5rem;
		transition: all 0.3s ease;
		cursor: pointer;
	}
	svg:hover {
		opacity: 0.7;
	}

	@media only screen and (max-width: 500px) {
		gap: 1.2rem;
		svg {
			font-size: 1.2rem;
		}
	}
`;
export const NameSubject = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
	color: ${({ theme }) => theme.text};
`;
export const Name = styled.span`
	font-size: 2rem;
	font-weight: 600;
	text-transform: uppercase;

	@media only screen and (max-width: 500px) {
		font-size: 1.6rem;
	}

	@media only screen and (max-width: 412px) {
		font-size: 1.3rem;
	}

	@media only screen and (max-width: 349px) {
		font-size: 1.1rem;
	}
`;

export const Photo = styled.div`
	height: 300px;
	width: 300px;
	border-radius: 50%;
	padding: 3px;
	background: ${({ theme }) => theme.buttons};

	@media only screen and (max-width: 500px) {
		height: 250px;
		width: 250px;
	}

	@media only screen and (max-width: 412px) {
		height: 200px;
		width: 200px;
	}

	@media only screen and (max-width: 355px) {
		height: 180px;
		width: 180px;
	}
`;
export const Logo = styled.img`
	height: 100%;
	width: 100%;
	object-fit: cover;
	border-radius: 50%;
`;

export const Subject = styled.span`
	font-size: 1.2rem;
	font-weight: 500;
	margin-top: 20px;
	margin-bottom: 20px;

	@media only screen and (max-width: 500px) {
		font-size: 1rem;
	}

	@media only screen and (max-width: 412px) {
		font-size: 0.8rem;
	}

	@media only screen and (max-width: 349px) {
		font-size: 0.6rem;
	}
`;

export const Buttons = styled.div`
	width: 100%;
	display: flex;
	justify-content: space-around;
	margin-top: 20px;
`;
export const HireMe = styled.button`
	background: ${({ theme }) => theme.secondColor};
	outline: none;
	border: none;
	color: white;
	font-weight: bold;
	padding: 8px 22px;
	border-radius: 20px;
	font-size: 1.5rem;
	font-weight: 500;
	transition: all 0.3s ease;
	&:hover {
		background: #333;
	}

	@media only screen and (max-width: 500px) {
		font-size: 1rem;
	}
`;
