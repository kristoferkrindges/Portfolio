import React from "react";
import { BoxOneContainer, Content, Modal, Banner } from "./style";
import BannerPhoto from "../../../../../assets/images/banner.jpeg";

export default function BoxOne() {
	return (
		<BoxOneContainer>
			{/* <Content>Hello Theree!!</Content> */}
			<Modal>
				{/* <Banner
					src={
						"https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb"
					}
				/> */}
				<Banner src={BannerPhoto.src} />
			</Modal>
		</BoxOneContainer>
	);
}
