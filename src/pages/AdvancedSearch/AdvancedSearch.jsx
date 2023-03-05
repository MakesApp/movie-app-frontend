import React from "react";
import { useState } from "react";
import AdvancedFields from "../AdvancedSearch/components/AdvancedFields/AdvancedFields";
import AdvancedTitle from "../AdvancedSearch/components/AdvancedTitle/AdvancedTitle";
import SearchBtn from "../AdvancedSearch/components/SearchBtn/SearchBtn";

export default function AdvancedSearch() {
	const [advancedFields, setAdvancedFields] = useState({
		from: "",
		to: "",
		minimumRating: "",
		minimumVotes: "",
		minimumRuntime: "",
		genre: "",
	});

	return (
		<div>
			<AdvancedTitle></AdvancedTitle>
			<AdvancedFields setAdvancedFields={setAdvancedFields}></AdvancedFields>
			<SearchBtn advancedFields={advancedFields}></SearchBtn>
		</div>
	);
}
