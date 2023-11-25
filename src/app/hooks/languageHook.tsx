import { useState } from "react";

interface LanguageContextProps {
	language: string;
	handleFilter: (id?: string) => void;
}

export default function useLanguage() {
	const [language, setLanguage] = useState("Portuguese");

	const handleFilter = (id?: string) => {
		setLanguage((prevLanguage) =>
			prevLanguage === "Portuguese" ? "English" : "Portuguese"
		);
		if (id) {
			console.log(`Filtering with id: ${id}`);
		}
	};

	return {
		handleFilter,
		language,
	};
}
