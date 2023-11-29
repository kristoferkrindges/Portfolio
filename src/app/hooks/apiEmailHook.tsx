import { NextResponse } from "next/server";
import { Resend } from "resend";

export interface EmailObject {
	from: string;
	to: string;
	subject: string;
	html: string;
}

export default function useApiEmail() {
	const getEmail = async (
		object: EmailObject
	): Promise<
		NextResponse<{ message: string }> | NextResponse<{ err: unknown }>
	> => {
		try {
			const resend = new Resend("re_ZVR31Nby_Lmi9GQMubJ46FF1K8eVN8jG1");
			const { data } = await resend.emails.send(object);
			console.log("foi", data);
			return NextResponse.json({ message: "Email sent!" });
		} catch (err) {
			console.log("erro: ", err);
			return NextResponse.json({ err });
		}
	};

	return { getEmail };
}
