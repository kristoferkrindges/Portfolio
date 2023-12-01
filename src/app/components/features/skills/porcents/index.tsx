import React from "react";
import { SkillBox, TitleName, SkillBar, SkillPer, ToolTip } from "./style";

interface PorcentsProps {
	porcentsState: boolean;
	number: number;
	name: string;
	porcents: string;
	icon: React.ReactNode;
}

export default function Porcents({
	porcentsState,
	number,
	name,
	porcents,
	icon,
}: PorcentsProps) {
	return (
		<SkillBox
			style={
				porcentsState
					? {
							opacity: 1,
							transform: `scale(1)`,
							transitionDelay: `calc(0.4s * ${number})`,
					  }
					: {}
			}
		>
			<TitleName>
				{icon}
				{name}
			</TitleName>
			{porcentsState && (
				<SkillBar>
					<SkillPer style={{ width: `${porcents}%` }}>
						<ToolTip>{porcents}%</ToolTip>
					</SkillPer>
				</SkillBar>
			)}
		</SkillBox>
	);
}
