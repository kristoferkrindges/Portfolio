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
`;

export const Photo = styled.div`
	position: absolute;
	inset: 0;
	/* overflow: hidden; */
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
