import React from "react";
import { ContactItem } from "./style";

export default function Porcents({ porcent, number }) {
	console.log(porcent);
	return (
		<ContactItem
			style={
				porcent
					? {
							opacity: 1,
							transform: `scale(1)`,
							transitionDelay: `calc(0.25s * ${number})`,
					  }
					: {}
			}
		>
			oi
		</ContactItem>
	);
}
