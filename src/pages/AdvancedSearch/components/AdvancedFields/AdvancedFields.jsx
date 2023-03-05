import { useState } from "react";
import * as S from "./AdvancedFields.styles";

export default function AdvancedFields({ setAdvancedFields }) {
	const years = [];
	const currentYear = new Date().getFullYear();
	for (let i = 1903; i <= currentYear; i++) {
		years.push(i);
	}
	years.reverse();
	const minRating = [1, 2, 3, 4, 5, 6, 7, 8, 9].reverse();
	const minVotes = [
		100, 500, 1000, 2000, 4000, 6000, 8000, 10000, 20000,
	].reverse();
	const genre = [
		"action",
		"adventure",
		"comedy",
		"drama",
		"fantasy",
		"horror",
		"musicals",
		"mystery",
		"romance",
		"science fiction",
		"sports",
		"thriller",
		"Western",
	];
	return (
		<S.Container>
			<S.Select
				name=''
				id=''
				onChange={(e) =>
					setAdvancedFields((prev) => {
						return { ...prev, from: e.target.selectedOptions[0].value };
					})
				}
			>
				{years.map((year, index) => {
					return (
						<S.Option key={`movieFrom${index}`} value={year}>
							{year}
						</S.Option>
					);
				})}
			</S.Select>
			<S.Select
				name=''
				id=''
				onChange={(e) =>
					setAdvancedFields((prev) => {
						return { ...prev, to: e.target.selectedOptions[0].value };
					})
				}
			>
				{years.map((year, index) => {
					return (
						<S.Option key={`movieTo${index}`} value={year}>
							{year}
						</S.Option>
					);
				})}
			</S.Select>
			<S.Select
				name=''
				id=''
				onChange={(e) =>
					setAdvancedFields((prev) => {
						return {
							...prev,
							minimumRating: e.target.selectedOptions[0].value,
						};
					})
				}
			>
				{minRating.map((year, index) => {
					return (
						<S.Option key={`movieRating${index}`} value={year}>
							{year}
						</S.Option>
					);
				})}{" "}
			</S.Select>
			<S.Select
				name=''
				id=''
				onChange={(e) =>
					setAdvancedFields((prev) => {
						return { ...prev, minimumVotes: e.target.selectedOptions[0].value };
					})
				}
			>
				{minVotes.map((vote, index) => {
					return (
						<S.Option key={`movieVotes${index}`} value={vote}>
							{vote}
						</S.Option>
					);
				})}{" "}
			</S.Select>
			<S.Select
				name=''
				id=''
				onChange={(e) =>
					setAdvancedFields((prev) => {
						return { ...prev, genre: e.target.selectedOptions[0].value };
					})
				}
			>
				{genre.map((vote, index) => {
					return (
						<S.Option key={`moviegenre${index}`} value={vote}>
							{vote}
						</S.Option>
					);
				})}{" "}
			</S.Select>
			<S.Select name='' id=''>
				minimum Runtime
			</S.Select>
		</S.Container>
	);
}
