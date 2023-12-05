import styled from "styled-components";

export const NavigationMobile = styled.div`
	position: fixed;
	bottom: 0;
	background: ${({ theme }) => theme.container};
	box-shadow: 4px 4px 16px rgba(0, 0, 0, 0.2);
	border-radius: 2rem 2rem 0 0;
	width: 100%;
	height: 70px;
	display: none;
	z-index: 999;
	@media only screen and (max-width: 999px) {
		display: flex;
		justify-content: center;
		align-items: center;
	}
`;

export const List = styled.ul`
	display: flex;
	width: 350px;
`;

export const Item = styled.li`
	position: relative;
	list-style: none;
	width: 70px;
	height: 70px;

	& a {
		position: relative;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		text-align: center;
		width: 100%;
		font-weight: 500;
		color: ${({ theme }) => theme.text};
		z-index: 40;
	}

	&.active a .icon {
		transform: translateY(-35px);
	}

	&.active a .text {
		opacity: 1;
		transform: translateY(10px);
	}

	&.active .newItem .icon {
		transform: translateY(-42px) rotate(225deg) translateX(-4px);
	}

	&.active .newItem .text {
		opacity: 1;
		transform: translateY(10px);
	}
`;

export const NewItem = styled.div`
	position: relative;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-direction: column;
	text-align: center;
	width: 100%;
	font-weight: 500;
	cursor: pointer;
	color: ${({ theme }) => theme.text};
	z-index: 40;
`;

export const Icon = styled.span`
	position: relative;
	display: block;
	line-height: 75px;
	font-size: 1.5em;
	text-align: center;
	transition: 0.5s;
`;

export const Legend = styled.span`
	position: absolute;
	font-weight: 400;
	font-size: 0.75em;
	letter-spacing: 0.05em;
	transition: 0.5s;
	opacity: 0;
	transform: translateY(20px);
`;

export const Indicator = styled.div`
	position: absolute;
	top: -50%;
	width: 70px;
	height: 70px;
	background: ${({ theme }) => theme.secondColor};
	border-radius: 50%;
	z-index: 14;
	border: 6px solid ${({ theme }) => theme.background};
	transition: 0.5s;
`;
