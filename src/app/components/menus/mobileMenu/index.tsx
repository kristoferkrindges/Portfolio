import Link from "next/link";
import {
	NavigationMobile,
	List,
	Item,
	Legend,
	Icon,
	Indicator,
	NewItem,
} from "./style";
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
import { useContext, useEffect, useRef, useState } from "react";
import SettingsMenu from "../settingsMenu";
import { LanguageContext } from "@/app/contexts/languageContext";
import { PlusIcon } from "../../icons/fAIcons.styled";
import CircularMenu from "./circularMenu";

export default function MobileMenu() {
	const [itemActive, setItemActive] = useState("Home");
	const [menuSettings, setMenuSettings] = useState(false);
	const [openMenu, setOpenMenu] = useState(false);
	const { language } = useContext(LanguageContext) || {};

	const itemActiveStyles: { [key: string]: { transform: string } } = {
		Home: { transform: `translateX(calc(70px*0))` },
		About: { transform: `translateX(calc(70px*1))` },
		Plus: { transform: `translateX(calc(70px*2))` },
		Skills: { transform: `translateX(calc(70px*3))` },
		Projects: { transform: `translateX(calc(70px*4))` },
	};

	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpenMenu(false);
			}
		};

		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handlerMenu = () => {
		setItemActive("Plus");
		handlerCircle();
		// setMenuSettings(menuSettings ? false : true);
	};

	const handlerCircle = () => {
		setOpenMenu(openMenu ? false : true);
	};

	return (
		<NavigationMobile>
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
				{/* <CircularMenu ref={menuRef} openMenu={openMenu} /> */}
				<Item
					ref={menuRef}
					className={itemActive === "Plus" ? "active" : "drop"}
				>
					<CircularMenu openMenu={openMenu} handlerCircle={handlerCircle} />
					<NewItem className="newItem">
						<Icon
							className="icon"
							style={itemActive === "Plus" ? { color: "white" } : {}}
							onClick={handlerMenu}
						>
							<PlusIcon />
						</Icon>
						<Legend className="text">
							{language === "Portuguese" ? "Mais" : "Plus"}
						</Legend>
					</NewItem>
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
				{/* <Item
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
				</Item> */}

				{/* <Item onClick={handlerMenu}>
					{menuSettings && <SettingsMenu handlerMenu={handlerMenu} />}
					<Link href="#">
						<Icon className="icon">
							<SettingsIcon />
						</Icon>
						<Legend className="text">DarkMode</Legend>
					</Link>
				</Item> */}
				<Indicator style={itemActiveStyles[itemActive]} />
			</List>
		</NavigationMobile>
	);
}
