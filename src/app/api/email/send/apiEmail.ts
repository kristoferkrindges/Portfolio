"use server";
import { NextResponse } from "next/server";
import { Resend } from "resend";

interface EmailObject {
	from: string;
	to: string;
	subject: string;
	text: string;
}

export default async function sendEmail(
	object: EmailObject
): Promise<NextResponse> {
	try {
		const resend = new Resend(process.env.RESEND_API_KEY);
		const { data, error } = await resend.emails.send(object);
		console.log(data, error);

		if (error) {
			return NextResponse.json({
				error: "Failed to send email.",
				details: error,
			});
		}

		return NextResponse.json({ message: "Email sent!", details: data });
	} catch (err) {
		console.error(err);
		return NextResponse.json({ error: "Failed to send email." });
	}
}
