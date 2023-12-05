import React from "react";
import { BoxContainer, Card, DesktopContainer } from "./style";
import BoxOne from "./boxOne";
import BoxTwo from "./boxTwo";
import Circle from "./circle";

export default function DesktopIntroduction() {
	return (
		<DesktopContainer>
			<BoxContainer>
				<Card>
					<BoxOne />
					<BoxTwo />
					<Circle />
				</Card>
			</BoxContainer>
		</DesktopContainer>
	);
}
