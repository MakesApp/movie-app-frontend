import React from "react";
import * as S from "./AdvancedFields.styled";

export default function AdvancedFields({ topMovies }) {
	const years = topMovies
		.map((movie) => {
			return movie.year;
		})
		.sort()
		.reverse();
	return (
		<S.Container>
			<S.Select name='' id=''>
				{years.map((year, index) => {
					return (
						<option key={`movie${index}`} value={year}>
							{year}
						</option>
					);
				})}
			</S.Select>
			<S.Select name='' id=''>
				{years.map((year, index) => {
					return (
						<option key={`movie${index}`} value={year}>
							{year}
						</option>
					);
				})}
			</S.Select>
		</S.Container>
	);
}
