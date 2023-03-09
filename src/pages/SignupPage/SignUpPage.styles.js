import styled from "styled-components/macro";

export const SignupContainer = styled.div`
	display: flex;
	justify-content: center;
	/* align-items: center; */
	margin: 2% auto;
	/* height: 80vh; */
	/* width: 70%; */
	/* margin: 0 auto; */
`;

export const SignupForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	background-color: #fff;
	padding: 2rem;
	/* width: 700px; */
	/* height: 600px; */
	border-radius: 10px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0);
`;

export const SignupInput = styled.input`
	width: 80%;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	margin-bottom: 10px;
	font-size: 1rem;
`;

export const SignupButton = styled.button`
	margin: 1rem 0 0;
	padding: 0.5rem;
	width: 100%;
	font-size: 1rem;
	border: none;
	border-radius: 5px;
	background-color: #0077ff;
	color: #fff;
	cursor: pointer;
	transition: all 0.2s ease;

	&:hover {
		background-color: #0066cc;
	}
`;

export const SignupTitle = styled.h1`
	font-size: 1.5rem;
	font-weight: 500;
	margin: 0 0 1rem;
`;

export const SignupLabel = styled.label`
	font-size: 1rem;
	margin: 1rem 0 0.5rem;
`;

export const ErrorMessage = styled.p`
	color: red;
	margin: 0.5rem 0 0;
`;
