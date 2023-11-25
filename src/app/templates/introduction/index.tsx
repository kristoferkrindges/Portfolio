import React from "react";
import { IntroductionContainer, Card } from "./style";
import BoxOne from "@/app/components/features/introduction/boxOne";
import BoxTwo from "@/app/components/features/introduction/boxTwo";
export default function IntroductionTemplate() {
	return (
		<IntroductionContainer>
			<BoxOne />
			<Card>
				<BoxTwo />
			</Card>
		</IntroductionContainer>
	);
}
