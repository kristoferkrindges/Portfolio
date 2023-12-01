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
			const resend = new Resend(process.env.RESEND_API_KEY);
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
