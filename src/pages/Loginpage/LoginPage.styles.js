import styled from "styled-components/macro";

export const LoginContainer = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	height: 80vh;
	width: 100%;
	margin: 0 auto;
`;

export const LoginForm = styled.form`
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	width: 600px;
	height: 500px;
	background-color: #ffffff;
	border-radius: 10px;
	box-shadow: 0 0 10px 0 rgba(0, 0, 0);
`;

export const LoginTitle = styled.h1`
	font-size: 36px;
	font-weight: 500;
	margin-bottom: 20px;
	color: #333;
`;
export const LoginLabel = styled.label`
	font-size: 1.2rem;
	margin-bottom: 0.5rem;
`;
export const LoginInput = styled.input`
	width: 80%;
	padding: 10px;
	border: 1px solid #ddd;
	border-radius: 4px;
	margin-bottom: 10px;
	font-size: 26px;
`;

export const LoginButton = styled.button`
	background-color: #007bff;
	color: #fff;
	border: none;
	padding: 10px 20px;
	border-radius: 4px;
	font-size: 26px;
	cursor: pointer;

	&:hover {
		background-color: #0069d9;
	}
`;

export const SignInButton = styled.button`
	display: flex;
	align-items: center;
	justify-content: center;
	height: 40px;
	background-color: #fff;
	border: 2px solid #007bff;
	border-radius: 2px;
	color: #007bff;
	font-size: 22px;
	font-weight: bold;
	cursor: pointer;
	transition: background-color 0.3s ease;
	&:hover {
		background-color: #007bff;
		color: #fff;
	}
	margin-top: 10px;
`;

export const GoogleIcon = styled.img`
	margin-right: 10px;
	height: 25px;
	width: 25px;
`;

export const LoginErrorMessage = styled.div`
	color: red;
	font-size: 0.8rem;
	margin-bottom: 1rem;
`;

export const ParaSign = styled.p`
	margin-top: 30px;
`;
