import MobileMenu from "@/app/components/menus/mobileMenu";
import TopSideMenu from "@/app/components/menus/topSideMenu";
import IntroductionTemplate from "../introduction";
import { Container } from "./style";

export default function HomeTemplate() {
	return (
		<>
			<TopSideMenu />
			<MobileMenu />
			<Container>
				<IntroductionTemplate />
			</Container>
		</>
	);
}
