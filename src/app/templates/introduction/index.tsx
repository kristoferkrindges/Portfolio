import React from "react";
import { IntroductionContainer, Card } from "./style";
import BoxOne from "@/app/components/features/introduction/boxOne";
import BoxTwo from "@/app/components/features/introduction/boxTwo";
import Circle from "@/app/components/features/introduction/circle";
export default function IntroductionTemplate() {
	return (
		<IntroductionContainer>
			<Card>
				<BoxOne />
				<BoxTwo />
				<Circle />
			</Card>
		</IntroductionContainer>
	);
}
