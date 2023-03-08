import styled from "styled-components";

export const Container = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	margin-top: 10px;
`;

export const StarRating = styled.div`
	display: flex;
	justify-content: center;
	margin-bottom: 1rem;
`;

export const Star = styled.span`
	cursor: pointer;
	font-size: 2rem;
	color: ${({ filled }) => (filled ? "#FFD700" : "#ccc")};
	transition: color 0.2s ease-in-out;
	&:hover {
		color: #ffd700;
	}
`;
export const CommentInput = styled.textarea`
	height: 2rem;
	margin-bottom: 1rem;
	padding: 0.5rem;
	font-size: 1rem;
	border-radius: 0.25rem;
	border: 1px solid #ccc;
	border-radius: 0.25rem;
	width: 700px;
`;

export const SubmitButton = styled.button`
	padding: 0.5rem 1rem;
	font-size: 1rem;
	border-radius: 0.25rem;
	border: none;
	background-color: #007bff;
	color: #fff;
	cursor: pointer;
`;

export const Title = styled.h1`
	padding-top: 10px;
	color: red;
	font-size: 1.3rem;
`;

export const DivComment = styled.div`
	margin-bottom: 16px;
	&:last-child {
		margin-bottom: 0;
	}
	color: yellow;
	padding-top: 5px;
`;

export const ToggleButton = styled.button`
	font-size: 24px;
	background-color: ${({ on }) => (on ? "#2196f3" : "#ccc")};
	border-radius: 15px;
	position: relative;
	cursor: pointer;
	transition: background-color 0.2s ease-in-out;
	&:after {
		position: absolute;
		top: 50%;
		width: 14px;
		height: 14px;
		border-radius: 50%;
		background-color: #fff;
		box-shadow: 0 2px 2px rgba(0, 0, 0, 0.3);
	}
	&:hover {
		background-color: #007bff;
		color: white;
	}
`;

export const Card = styled.div`
	background-color: #fff;
	color: #333;
	border-radius: 15px;
	padding: 20px 15px;
	margin: 10px 0;
	width: 700px;
	position: relative;
	display: flex;
	justify-content: space-between;
`;

export const TextDisplay = styled.div`
	margin-bottom: 20px;
`;

export const EditButton = styled.button`
	background-color: #ddd;
	border: none;
	padding: 5px 10px;
	border-radius: 5px;
	font-size: 14px;
	cursor: pointer;
	margin-left: 10px;

	&:hover {
		background-color: #bbb;
	}
`;
