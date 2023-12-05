import Link from "next/link";
import { Navigation, Item, Indicator } from "./style";
import {
	AboutIcon,
	ContactIcon,
	HomeIcon,
	ProjectsIcon,
	SettingsIcon,
} from "../../icons/iO5Icons.styled";
import { useContext, useState } from "react";
import { Icon, Legend, List } from "../mobileMenu/style";
import { LanguageContext } from "@/app/contexts/languageContext";

export default function NavigationMenu() {
	const [itemActive, setItemActive] = useState("Home");

	const { language } = useContext(LanguageContext) || {};

	const itemActiveStyles: { [key: string]: { transform: string } } = {
		Home: { transform: `translateX(calc(70px*0))` },
		About: { transform: `translateX(calc(70px*1))` },
		Skills: { transform: `translateX(calc(70px*2))` },
		Projects: { transform: `translateX(calc(70px*3))` },
		Contact: { transform: `translateX(calc(70px*4))` },
	};

	return (
		<Navigation>
			<List>
				<Item
					className={itemActive === "Home" ? "active" : "drop"}
					onClick={() => setItemActive("Home")}
				>
					<Link href="#Home">
						<Icon
							className="icon"
							style={itemActive === "Home" ? { color: "white" } : {}}
						>
							<HomeIcon />
						</Icon>
						<Legend className="text">
							{language === "Portuguese" ? "Inicio" : "Home"}
						</Legend>
					</Link>
				</Item>
				<Item
					className={itemActive === "About" ? "active" : "drop"}
					onClick={() => setItemActive("About")}
				>
					<Link href="#About">
						<Icon
							className="icon"
							style={itemActive === "About" ? { color: "white" } : {}}
						>
							<AboutIcon />
						</Icon>
						<Legend className="text">
							{language === "Portuguese" ? "Sobre" : "About"}
						</Legend>
					</Link>
				</Item>
				<Item
					className={itemActive === "Skills" ? "active" : "drop"}
					onClick={() => setItemActive("Skills")}
				>
					<Link href="#Skills">
						<Icon
							className="icon"
							style={itemActive === "Skills" ? { color: "white" } : {}}
						>
							<SettingsIcon />
						</Icon>
						<Legend className="text">
							{language === "Portuguese" ? "Habilidades" : "Skills"}
						</Legend>
					</Link>
				</Item>
				<Item
					className={itemActive === "Projects" ? "active" : "drop"}
					onClick={() => setItemActive("Projects")}
				>
					<Link href="#Projects">
						<Icon
							className="icon"
							style={itemActive === "Projects" ? { color: "white" } : {}}
						>
							<ProjectsIcon />
						</Icon>
						<Legend className="text">
							{language === "Portuguese" ? "Projetos" : "Projects"}
						</Legend>
					</Link>
				</Item>
				<Item
					className={itemActive === "Contact" ? "active" : "drop"}
					onClick={() => setItemActive("Contact")}
				>
					<Link href="#Contact">
						<Icon
							className="icon"
							style={itemActive === "Contact" ? { color: "white" } : {}}
						>
							<ContactIcon />
						</Icon>
						<Legend className="text">
							{language === "Portuguese" ? "Contato" : "Contact"}
						</Legend>
					</Link>
				</Item>

				<Indicator style={itemActiveStyles[itemActive]} />
			</List>
		</Navigation>
	);
}
