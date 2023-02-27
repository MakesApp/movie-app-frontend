import React, { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./LoginPage.styles";
const LoginPage = () => {
	const [name, setName] = useState("");
	const [password, setPassword] = useState("");
	const [nameError, setNameError] = useState("");
	const [passwordError, setPasswordError] = useState("");

	const handleNameChange = (e) => {
		setName(e.target.value);

		if (e.target.value.trim() === "") {
			setNameError("Username is required");
		} else {
			setNameError("");
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

	const handleSignIn = async () => {};

	return (
		<S.LoginContainer>
			<S.LoginForm onSubmit={handleSubmit}>
				<S.LoginTitle>Login Page</S.LoginTitle>
				<S.LoginLabel htmlFor='email'>Name:</S.LoginLabel>
				<S.LoginInput
					type='name'
					id='name'
					name='name'
					value={name}
					onChange={handleNameChange}
					required
				/>
				<S.LoginLabel htmlFor='password'>Password:</S.LoginLabel>
				<S.LoginInput
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={handlePasswordChange}
					required
				/>
				<S.LoginButton type='submit'>Login</S.LoginButton>

				<S.SignInButton onClick={handleSignIn}>
					<S.GoogleIcon src='https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png' />
					Sign in with Google
				</S.SignInButton>
				<S.ParaSign>
					Dont have an account? <Link to='/Signup'>Sign up here</Link>.
				</S.ParaSign>
			</S.LoginForm>
		</S.LoginContainer>
	);
};

export default LoginPage;
