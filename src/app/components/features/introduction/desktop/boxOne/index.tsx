import React from "react";
import { BoxOneContainer, Content, Modal, Banner } from "./style";
import BannerPhoto from "../../../../../assets/images/banner.jpeg";

export default function BoxOne() {
	return (
		<BoxOneContainer>
			{/* <Content>Hello Theree!!</Content> */}
			<Modal>
				<Banner
					src={
						"https://media.istockphoto.com/id/1426549627/pt/foto/close-up-of-screen-showing-software-code.jpg?s=612x612&w=0&k=20&c=go_kw3VvIT9EbPwHwQKu1PaJgft1xGkj1ii-8fITPkg="
					}
				/>
				{/* <Banner src={BannerPhoto.src} /> */}
			</Modal>
		</BoxOneContainer>
	);
}

// https://www.ntc.edu/sites/default/files/styles/full_width_16_9/public/2021-06/software-development-specialist.jpg?itok=D8qgVwxb
