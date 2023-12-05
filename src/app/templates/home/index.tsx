import MobileMenu from "@/app/components/menus/mobileMenu";
import TopSideMenu from "@/app/components/menus/topSideMenu";
import IntroductionTemplate from "../introduction";
import { Container } from "./style";
import AboutTemplate from "../about";
import ProjectsTemplate from "../projects";
import SkillsTemplate from "../skills";
import FooterTemplate from "../footer";
import ContactTemplate from "../contact";

export default function HomeTemplate() {
	return (
		<>
			<TopSideMenu />
			<MobileMenu />
			<Container>
				<IntroductionTemplate />
				<AboutTemplate />
				<SkillsTemplate />
				<ProjectsTemplate />
				<ContactTemplate />
				<FooterTemplate />
			</Container>
		</>
	);
}
