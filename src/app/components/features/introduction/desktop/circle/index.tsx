import React from "react";
import { CircleContainer, Photo, MyPicture, Social } from "./style";
import KristoferPhoto from "../../../../../assets/images/kristofer.png";

import SocialButtons from "@/app/components/buttons/socialButtons";

export default function Circle() {
	return (
		<CircleContainer>
			<Photo>
				<MyPicture src={KristoferPhoto.src} />
				<Social className="github">
					<SocialButtons type="Github" />
				</Social>
				<Social className="linkedin">
					<SocialButtons type="Linkedin" />
				</Social>
				<Social className="gmail">
					<SocialButtons type="Gmail" />
				</Social>
			</Photo>
		</CircleContainer>
	);
}
