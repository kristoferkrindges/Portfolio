import Link from "next/link";
import { NavigationMobile, List, Item, Legend, Icon, Indicator } from "./style";
import {
	AboutIcon,
	ContactIcon,
	HomeIcon,
	LanguageIcon,
	MoonIcon,
	ProjectsIcon,
	SettingsIcon,
	SunIcon,
} from "../../icons/iO5Icons.styled";
import { useState } from "react";
import SettingsMenu from "../settingsMenu";

export default function MobileMenu() {
	const [itemActive, setItemActive] = useState("Home");
	const [menuSettings, setMenuSettings] = useState(false);

	const itemActiveStyles: { [key: string]: { transform: string } } = {
		Home: { transform: `translateX(calc(70px*0))` },
		About: { transform: `translateX(calc(70px*1))` },
		Projects: { transform: `translateX(calc(70px*2))` },
		Contact: { transform: `translateX(calc(70px*3))` },
	};

	const handlerMenu = () => {
		setMenuSettings(menuSettings ? false : true);
	};

	return (
		<NavigationMobile>
			<List>
				<Item
					className={itemActive === "Home" ? "active" : "drop"}
					onClick={() => setItemActive("Home")}
				>
					<Link href="#">
						<Icon
							className="icon"
							style={itemActive === "Home" ? { color: "white" } : {}}
						>
							<HomeIcon />
						</Icon>
						<Legend className="text">Home</Legend>
					</Link>
				</Item>
				<Item
					className={itemActive === "About" ? "active" : "drop"}
					onClick={() => setItemActive("About")}
				>
					<Link href="#">
						<Icon
							className="icon"
							style={itemActive === "About" ? { color: "white" } : {}}
						>
							<AboutIcon />
						</Icon>
						<Legend className="text">About</Legend>
					</Link>
				</Item>
				<Item
					className={itemActive === "Projects" ? "active" : "drop"}
					onClick={() => setItemActive("Projects")}
				>
					<Link href="#">
						<Icon
							className="icon"
							style={itemActive === "Projects" ? { color: "white" } : {}}
						>
							<ProjectsIcon />
						</Icon>
						<Legend className="text">Projects</Legend>
					</Link>
				</Item>
				<Item
					className={itemActive === "Contact" ? "active" : "drop"}
					onClick={() => setItemActive("Contact")}
				>
					<Link href="#">
						<Icon
							className="icon"
							style={itemActive === "Contact" ? { color: "white" } : {}}
						>
							<ContactIcon />
						</Icon>
						<Legend className="text">Contact</Legend>
					</Link>
				</Item>

				<Item onClick={handlerMenu}>
					{menuSettings && <SettingsMenu handlerMenu={handlerMenu} />}
					<Link href="#">
						<Icon className="icon">
							<SettingsIcon />
						</Icon>
						<Legend className="text">DarkMode</Legend>
					</Link>
				</Item>
				<Indicator style={itemActiveStyles[itemActive]} />
			</List>
		</NavigationMobile>
	);
}
