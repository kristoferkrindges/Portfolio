import { useState } from "react";

export default function useAssistant() {
	const [language, setLanguage] = useState("Portuguese");

	const handleFilter = (id: string) => {
		setLanguage(id);
	};

	return {
		handleFilter,
		language,
	};
}
