import React from "react";
import { BoxContainer, Card } from "./style";
import BoxOne from "./boxOne";
import BoxTwo from "./boxTwo";
import Circle from "./circle";

export default function DesktopIntroduction() {
	return (
		<BoxContainer>
			<Card>
				<BoxOne />
				<BoxTwo />
				<Circle />
			</Card>
		</BoxContainer>
	);
}
