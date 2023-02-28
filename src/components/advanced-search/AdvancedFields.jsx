import React from "react";

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
		<form>
			<select name='' id=''>
				{years.map((year, index) => {
					return (
						<option key={`movie${index}`} value={year}>
							{year}
						</option>
					);
				})}
			</select>
			<select name='' id=''>
				{years.map((year, index) => {
					return (
						<option key={`movie${index}`} value={year}>
							{year}
						</option>
					);
				})}
			</select>
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
			<select name='' id=''></select>
		</form>
	);
}
