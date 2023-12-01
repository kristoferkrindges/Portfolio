import MobileMenu from "@/app/components/menus/mobileMenu";
import TopSideMenu from "@/app/components/menus/topSideMenu";
import IntroductionTemplate from "../introduction";
import { Container } from "./style";
import AboutTemplate from "../about";
import ProjectsTemplate from "../projects";
import Contact from "@/app/components/features/contact";
import SkillsTemplate from "../skills";

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
				<Contact />
			</Container>
		</>
	);
}
