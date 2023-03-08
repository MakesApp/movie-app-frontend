import { useState } from "react";
import * as S from "./Reviews.styles";
import styled from "styled-components";
const movies = [
	{
		movieId: "1",
		ratings: {},
		reviews: [
			{
				userId: "2",
				content: "bla bla",
			},
			{
				userId: "4",
				content: "hello hello",
			},
		],
	},
];
const ReviewForm = () => {
	const [reviews, setReviews] = useState(movies);
	const [rating, setRating] = useState(0);
	const [content, setContent] = useState("");
	const [hoveredStar, setHoveredStar] = useState(0);
	const [isVisible, setIsVisible] = useState(false);

	const StarsContainer = styled.div`
		display: flex;
		justify-content: center;
		&:hover ${S.Star}:nth-child(-n + ${({ hoveredStar }) => hoveredStar}) {
			color: #ffd700;
		}
		padding-top: 10px;
		padding-bottom: 10px;
	`;
	const handleStarClick = (starRating) => {
		setRating(starRating);
	};

	const handleContentChange = (event) => {
		setContent(event.target.value);
	};

	const handleStarHover = (starNumber) => {
		setHoveredStar(starNumber);
	};

	const handleStarLeave = () => {
		setHoveredStar(0);
	};

	const handleToggleForm = () => {
		setIsVisible(!isVisible);
	};

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleEdit = (reviewId) => {};

	return (
		<S.Container>
			<S.Title>Reviews</S.Title>
			{reviews.length > 0 ? (
				reviews.map((movie) => (
					<S.DivComment key={movie.movieId}>
						{movie.reviews.map((review) => (
							<S.DivComment key={review.id}>
								<S.Card>
									{review.content}
									<S.EditButton onClick={() => handleEdit(review.id)}>
										Edit
									</S.EditButton>
								</S.Card>
							</S.DivComment>
						))}
					</S.DivComment>
				))
			) : (
				<S.DivComment>No reviews yet.</S.DivComment>
			)}
			<S.ToggleButton onClick={handleToggleForm}>
				{isVisible ? "Hide a Review" : "Write a Review"}
			</S.ToggleButton>
			{isVisible && (
				<>
					<StarsContainer hoveredStar={hoveredStar}>
						{[1, 2, 3, 4, 5].map((star) => (
							<S.Star
								key={star}
								filled={star <= rating}
								onClick={() => handleStarClick(star)}
								onMouseEnter={() => handleStarHover(star)}
								onMouseLeave={() => handleStarLeave()}
							>
								&#9733;
							</S.Star>
						))}
					</StarsContainer>
					<S.CommentInput
						placeholder='Write a review...'
						value={content}
						onChange={handleContentChange}
					/>
					<S.SubmitButton onClick={handleSubmit}>Submit</S.SubmitButton>
				</>
			)}
		</S.Container>
	);
};

export default ReviewForm;
