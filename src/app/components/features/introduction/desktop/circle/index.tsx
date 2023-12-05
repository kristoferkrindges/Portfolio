import React from "react";
import { CircleContainer, Photo, MyPicture, Social } from "./style";
import KristoferPhoto from "../../../../../assets/images/kristofer.png";
import SocialButtons from "@/app/components/buttons/socialButtons";
import { motion } from "framer-motion";
import {
	DesktopFadeInTopVariant,
	DesktopFadeInBottomVariant,
	DesktopfadeInLeftVariant,
} from "@/app/utils/motion";

export default function Circle() {
	return (
		<CircleContainer>
			<Photo>
				<MyPicture src={KristoferPhoto.src} />
				<Social
					className="github"
					as={motion.div}
					variants={DesktopFadeInTopVariant}
					initial="hidden"
					whileInView="visible"
				>
					<SocialButtons type="Github" />
				</Social>
				<Social
					className="linkedin"
					as={motion.div}
					variants={DesktopFadeInBottomVariant}
					initial="hidden"
					whileInView="visible"
				>
					<SocialButtons type="Linkedin" />
				</Social>
				<Social
					className="gmail"
					as={motion.div}
					variants={DesktopfadeInLeftVariant}
					initial="hidden"
					whileInView="visible"
				>
					<SocialButtons type="Gmail" />
				</Social>
			</Photo>
		</CircleContainer>
	);
}
