import styled from "styled-components";

export const SkillBox = styled.li`
	padding: 1rem;
	border-radius: 2rem;
	background-color: ${({ theme }) => theme.container};
	display: flex;
	flex-direction: column;
	gap: 1rem;
	width: 90%;
	transition: 0.5s;
	opacity: 0;
	transform: scale(0);

	@media only screen and (max-width: 505px) {
		width: 100%;
	}
`;

export const TitleName = styled.span`
	display: flex;
	align-items: center;
	gap: 0.3rem;
	font-size: 14px;
	font-weight: bold;
	color: ${({ theme }) => theme.text};
	svg {
		font-size: 16px;
		font-weight: bold;
	}
`;

export const SkillBar = styled.div`
	width: 100%;
	height: 8px;
	border-radius: 6px;
	background-color: rgba(0, 0, 0, 0.1);
`;

export const SkillPer = styled.span`
	position: relative;
	display: block;
	height: 100%;
	background-color: ${({ theme }) => theme.secondColor};
	border-radius: 6px;
	animation: progress 2s ease-in-out forwards;

	@keyframes progress {
		0% {
			width: 0;
			opacity: 0;
		}
		100% {
			opacity: 1;
		}
	}
`;

export const ToolTip = styled.span`
	position: absolute;
	right: -14px;
	top: -28px;
	font-size: 12px;
	font-weight: 400;
	background: ${({ theme }) => theme.secondColor};
	color: #ffff;
	padding: 2px 6px;
	border-radius: 3px;
	z-index: 1;

	&::before {
		content: "";
		position: absolute;
		left: 50%;
		bottom: -2px;
		height: 10px;
		width: 10px;
		z-index: -1;
		background-color: ${({ theme }) => theme.secondColor};
		transform: translateX(-50%) rotate(45deg);
	}
`;
