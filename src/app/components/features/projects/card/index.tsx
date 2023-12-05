import { SocialButton } from "@/app/components/buttons/socialButtons/style";
import {
	CardContainer,
	Content,
	ImageBox,
	ImageProject,
	Title,
	Phrase,
	Social,
	Icons,
} from "./style";
import {
	ChromeIcon,
	GithubIcon,
	JavaIcon,
	NodeIcon,
} from "@/app/components/icons/fAIcons.styled";
import Link from "next/link";
import { ReactIcon } from "@/app/components/icons/iO5Icons.styled";
import {
	DotNetIcon,
	FirebaseIcon,
	MongoIcon,
	PostgreIcon,
} from "@/app/components/icons/sIIcons.styled";
import { motion } from "framer-motion";
import { fadeInBottomVariant } from "@/app/utils/motion";

interface CardProps {
	photo: string;
	name: string;
	phrase: string;
	git: string;
	link: string;
	technologies: string[];
}

export default function Card({
	photo,
	name,
	phrase,
	git,
	link,
	technologies,
}: CardProps) {
	return (
		<CardContainer
			as={motion.div}
			variants={fadeInBottomVariant}
			initial="hidden"
			whileInView="visible"
			transition={{ type: "tween", duration: 1 }}
		>
			<ImageBox className="imgBx">
				<ImageProject src={photo} />
			</ImageBox>
			<Content className="content">
				<Title>{name}</Title>
				<Phrase>{phrase}</Phrase>
				<Icons>
					{technologies.includes("react") && (
						<SocialButton color={`#149eca`}>
							<ReactIcon />
						</SocialButton>
					)}
					{technologies.includes("java") && (
						<SocialButton color={`#dc5946`}>
							<JavaIcon />
						</SocialButton>
					)}
					{technologies.includes("node") && (
						<SocialButton color={`#026e00`}>
							<NodeIcon />
						</SocialButton>
					)}
					{technologies.includes("c#") && (
						<SocialButton color={`#6c287d`}>
							<DotNetIcon />
						</SocialButton>
					)}
					{technologies.includes("mongodb") && (
						<SocialButton color={`#12a54f`}>
							<MongoIcon />
						</SocialButton>
					)}
					{technologies.includes("postgre") && (
						<SocialButton color={`#31648c`}>
							<PostgreIcon />
						</SocialButton>
					)}
					{technologies.includes("firebase") && (
						<SocialButton color={`#f48b16`}>
							<FirebaseIcon />
						</SocialButton>
					)}
				</Icons>
			</Content>
			<Social>
				<Link href={git}>
					<SocialButton color={`#000`}>
						<GithubIcon />
					</SocialButton>
				</Link>
				<Link href={link}>
					<SocialButton color={`#000`}>
						<ChromeIcon />
					</SocialButton>
				</Link>
			</Social>
		</CardContainer>
	);
}
