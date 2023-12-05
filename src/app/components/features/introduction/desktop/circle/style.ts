import styled from "styled-components";

export const CircleContainer = styled.div`
	position: absolute;
	top: 50%;
	left: -300px;
	transform: translateY(-50%);
	width: 550px;
	height: 550px;
	background: ${({ theme }) => theme.background};
	border-radius: 50%;
	border: 10px solid transparent;

	@media only screen and (max-width: 1700px) {
		width: 500px;
		height: 500px;
	}

	@media only screen and (max-width: 1488px) {
		width: 450px;
		height: 450px;
	}

	@media only screen and (max-width: 1400px) {
		width: 400px;
		height: 400px;
		left: -200px;
	}
`;

export const Photo = styled.div`
	position: absolute;
	inset: 0;
	border-radius: 50%;

	.github {
		top: -50px;
		left: 50px;
	}

	.linkedin {
		bottom: -50px;
		left: 50px;
	}

	.gmail {
		top: 45%;
		left: -90px;
	}

	@media only screen and (max-width: 1700px) {
		.github {
			top: -30px;
			left: 60px;
		}

		.linkedin {
			bottom: -30px;
			left: 50px;
		}

		.gmail {
			top: 45%;
			left: -80px;
		}
	}

	@media only screen and (max-width: 1488px) {
		.github {
			top: -25px;
			left: 60px;
		}

		.linkedin {
			bottom: -25px;
			left: 60px;
		}

		.gmail {
			top: 45%;
			left: -65px;
		}
	}
`;

export const Social = styled.div`
	position: absolute;
`;

export const MyPicture = styled.img`
	border-radius: 50%;
	width: 100%;
	height: 100%;
	object-fit: cover;
`;
