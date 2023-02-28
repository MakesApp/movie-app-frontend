import React from "react";
import * as S from "./AdvancedFields.styled";

export default function AdvancedFields({ topMovies }) {
	const years = topMovies
		.map((movie) => {
			return movie.year;
		})
		.sort()
		.reverse();
	// const genreArr = [];
	// topMovies
	// 	.foreach((movie) => {
	// 		if (!genreArr.includes(movie.genre)) genreArr.push(movie.genre);
	// 	})
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
			{/* <select name='' id=''>
					{genreArr &&
						genreArr.map((genre, index) => {
							return (
								<option key={`genre${index}`} value={genre}>
									{genre}
								</option>
							);
						})}
				</select> */}
		</S.Container>
	);
}
