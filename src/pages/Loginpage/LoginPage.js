import React, { useState } from "react";
import * as S from "./LoginPage.styles";
const LoginPage = () => {
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [emailError, setEmailError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleEmailChange = (e) => {
		setEmail(e.target.value);

		const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		if (!emailPattern.test(e.target.value)) {
			setEmailError("Invalid email address");
		} else {
			setEmailError("");
		}
	};

	const handlePasswordChange = (e) => {
		setPassword(e.target.value);

		const passwordPattern =
			/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/;
		if (!passwordPattern.test(e.target.value)) {
			setPasswordError(
				"Password must be at least 8 characters long and contain at least one uppercase letter, one lowercase letter, and one number"
			);
		} else {
			setPasswordError("");
		}
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	const handleSignIn = () => {};

	return (
		<S.LoginContainer>
			<S.LoginForm onSubmit={handleSubmit}>
				<S.LoginTitle>Login Page</S.LoginTitle>
				<S.LoginLabel htmlFor='email'>Email:</S.LoginLabel>
				<S.LoginInput
					type='email'
					id='email'
					name='email'
					value={email}
					onChange={handleEmailChange}
					required
				/>
				{/* {emailError && <S.LoginErrorMessage>{emailError}</S.LoginErrorMessage>} */}
				<S.LoginLabel htmlFor='password'>Password:</S.LoginLabel>
				<S.LoginInput
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={handlePasswordChange}
					required
				/>
				{/* {passwordError && (
					<S.LoginErrorMessage>{passwordError}</S.LoginErrorMessage>
				)} */}
				<S.LoginButton type='submit'>Login</S.LoginButton>

				<S.SignInButton onClick={handleSignIn}>
					<S.GoogleIcon src='https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png' />
					Sign in with Google
				</S.SignInButton>
			</S.LoginForm>
		</S.LoginContainer>
	);
};

export default LoginPage;
