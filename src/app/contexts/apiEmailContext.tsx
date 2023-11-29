import React from "react";
import { NextResponse } from "next/server";
import UseApiEmail, { EmailObject } from "../hooks/apiEmailHook";

interface ApiEmailContextProps {
	getEmail: (
		object: EmailObject
	) => Promise<
		NextResponse<{ message: string }> | NextResponse<{ err: unknown }>
	>;
}

const ApiEmailContext = React.createContext<ApiEmailContextProps | null>(null);

function ApiEmailProvider({ children }: { children: React.ReactNode }) {
	const { getEmail } = UseApiEmail();

	return (
		<ApiEmailContext.Provider
			value={{
				getEmail,
			}}
		>
			{children}
		</ApiEmailContext.Provider>
	);
}

export { ApiEmailContext, ApiEmailProvider };
