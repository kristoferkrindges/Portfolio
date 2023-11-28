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

export default function Card({ photo, name, phrase, git, link, technologies }) {
	return (
		<CardContainer>
			<ImageBox className="imgBx">
				<ImageProject src={photo} />
			</ImageBox>
			<Content className="content">
				<Title>{name}</Title>
				<Phrase>{phrase}</Phrase>
				<Icons>
					{technologies.includes("react") && (
						<SocialButton backgroundColor={`#149eca`}>
							<ReactIcon />
						</SocialButton>
					)}
					{technologies.includes("java") && (
						<SocialButton backgroundColor={`#dc5946`}>
							<JavaIcon />
						</SocialButton>
					)}
					{technologies.includes("node") && (
						<SocialButton backgroundColor={`#026e00`}>
							<NodeIcon />
						</SocialButton>
					)}
					{technologies.includes("c#") && (
						<SocialButton backgroundColor={`#6c287d`}>
							<DotNetIcon />
						</SocialButton>
					)}
					{technologies.includes("mongodb") && (
						<SocialButton backgroundColor={`#12a54f`}>
							<MongoIcon />
						</SocialButton>
					)}
					{technologies.includes("postgre") && (
						<SocialButton backgroundColor={`#31648c`}>
							<PostgreIcon />
						</SocialButton>
					)}
					{technologies.includes("firebase") && (
						<SocialButton backgroundColor={`#f48b16`}>
							<FirebaseIcon />
						</SocialButton>
					)}
				</Icons>
			</Content>
			<Social>
				<Link href={git}>
					<SocialButton backgroundColor={`#000`}>
						<GithubIcon />
					</SocialButton>
				</Link>
				<Link href={link}>
					<SocialButton backgroundColor={`#000`}>
						<ChromeIcon />
					</SocialButton>
				</Link>
			</Social>
		</CardContainer>
	);
}
