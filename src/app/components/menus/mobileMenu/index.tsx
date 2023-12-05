import React, { useEffect, useState, useRef, useContext } from "react";
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
	HomeIcon,
	ProjectsIcon,
	SettingsIcon,
} from "../../icons/iO5Icons.styled";
import { PlusIcon } from "../../icons/fAIcons.styled";
import CircularMenu from "./circularMenu";
import { LanguageContext } from "@/app/contexts/languageContext";

export default function MobileMenu() {
	const { language } = useContext(LanguageContext) || {};
	const [itemActive, setItemActive] = useState("Home");
	const [openMenu, setOpenMenu] = useState(false);

	const itemActiveStyles: { [key: string]: { transform: string } } = {
		Home: { transform: `translateX(calc(70px*0))` },
		About: { transform: `translateX(calc(70px*1))` },
		Plus: { transform: `translateX(calc(70px*2))` },
		Skills: { transform: `translateX(calc(70px*3))` },
		Projects: { transform: `translateX(calc(70px*4))` },
	};

	const menuRef = useRef<HTMLDivElement | null>(null);

	useEffect(() => {
		const handleScroll = () => {
			const scrollPosition = window.scrollY;
			const sections = document.querySelectorAll("section");

			sections.forEach((section) => {
				const { top, bottom } = section.getBoundingClientRect();

				if (
					section.id === "Contact" &&
					top <= window.innerHeight / 2 &&
					bottom >= window.innerHeight / 2
				) {
					setItemActive("Plus");
				} else if (
					top <= window.innerHeight / 2 &&
					bottom >= window.innerHeight / 2
				) {
					setItemActive(section.id);
				}
			});
		};

		const handleClickOutside = (event: MouseEvent) => {
			if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
				setOpenMenu(false);
			}
		};

		document.addEventListener("scroll", handleScroll);
		document.addEventListener("click", handleClickOutside);

		return () => {
			document.removeEventListener("scroll", handleScroll);
			document.removeEventListener("click", handleClickOutside);
		};
	}, []);

	const handlerMenu = () => {
		setItemActive("Plus");
		handlerCircle();
	};

	const handlerCircle = () => {
		setOpenMenu((prevOpenMenu) => !prevOpenMenu);
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
				<Item
					ref={menuRef as React.MutableRefObject<HTMLLIElement | null>}
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
				<Indicator style={itemActiveStyles[itemActive]} />
			</List>
		</NavigationMobile>
	);
}
