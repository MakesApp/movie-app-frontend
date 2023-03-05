import { useState } from "react";
import { Link } from "react-router-dom";
import * as S from "./LoginPage.styles";
import { login } from "../../auth/auth";
const LoginPage = () => {
	const [credentials, setCredentials] = useState({
		username: "",
		password: "",
	});
	const [error, setError] = useState("");

	const setErrorMessage = (message) => {
		setError(message);
		setTimeout(() => {
			setError("");
		}, 1500);
	};

	const handleNameChange = (e) => {
		setCredentials((prev) => ({ ...prev, username: e.target.value }));
	};

	const handlePasswordChange = (e) => {
		setCredentials((prev) => ({ ...prev, password: e.target.value }));
	};

	const handleSubmit = (e) => {
		e.preventDefault();
		login({
			username: credentials?.username,
			password: credentials?.password,
		})
			.then((res) => {
				if (res.data === "success") window.open("/", "_self");
			})
			.catch((err) => {
				setErrorMessage("Incorrect Credentials");
			});
	};

	return (
		<S.LoginContainer>
			<S.LoginForm onSubmit={(e) => handleSubmit(e)}>
				<S.LoginTitle>Login Page</S.LoginTitle>
				<S.LoginLabel htmlFor='username'>Username:</S.LoginLabel>
				<S.LoginInput
					id='username'
					name='username'
					value={credentials?.username}
					onChange={(e) => handleNameChange(e)}
					required
					minLength='3'
				/>
				<S.LoginLabel htmlFor='password'>Password:</S.LoginLabel>
				<S.LoginInput
					type='password'
					id='password'
					name='password'
					minLength='6'
					value={credentials?.password}
					onChange={(e) => handlePasswordChange(e)}
					required
				/>
				<S.LoginButton type='submit'>Login</S.LoginButton>
				<S.SignInButton
					href={process.env.REACT_APP_BASE_URL + "api/auth/google"}
				>
					<S.GoogleIcon src='https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png' />
					Sign in with Google
				</S.SignInButton>
				{error && <S.ErrorMessage>{error}</S.ErrorMessage>}
				<S.ParaSign>
					Dont have an account? <Link to='/signup'>Sign up here</Link>.
				</S.ParaSign>
			</S.LoginForm>
		</S.LoginContainer>
	);
};

export default LoginPage;
