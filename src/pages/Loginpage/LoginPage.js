import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as S from "./LoginPage.styles";
import axios from "axios";
const LoginPage = () => {
	const navigate = useNavigate();
	const [credentials, setCredentials] = useState({
		userName: "",
		password: "",
	});
	const [errors, setErrors] = useState({ userName: "", password: "" });

	const handleNameChange = (e) => {
		setCredentials((prev) => ({ ...prev, userName: e.target.value }));
	};

	const handlePasswordChange = (e) => {
		setCredentials((prev) => ({ ...prev, password: e.target.value }));
	};

	const fetchAuthUser = () => {
		axios
			.get(process.env.REACT_APP_BASE_URL + "api/auth/user", {
				withCredentials: true,
			})
			.then((data) => console.log(data.data))
			.catch((err) => console.log(err));
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		axios
			.post(
				"http://localhost:8080/login",
				{ username: "ameer", password: "123" },
				{
					withCredentials: true,
				}
			)
			.then(
				(res) => {
					if (res.data === "success") {
						fetchAuthUser();
						window.location.href = "/";
					}
				},
				() => {
					console.log("Failure");
				}
			);
	};

	return (
		<S.LoginContainer>
			<S.LoginForm onSubmit={(e) => handleSubmit(e)}>
				<S.LoginTitle>Login Page</S.LoginTitle>
				<S.LoginLabel htmlFor='name'>Name:</S.LoginLabel>
				<S.LoginInput
					id='name'
					name='name'
					value={credentials?.userName}
					onChange={(e) => handleNameChange(e)}
					required
				/>
				<S.LoginLabel htmlFor='password'>Password:</S.LoginLabel>
				<S.LoginInput
					type='password'
					id='password'
					name='password'
					value={credentials?.password}
					onChange={(e) => handlePasswordChange(e)}
					required
				/>
				<S.LoginButton type='submit'>Login</S.LoginButton>

				<S.ParaSign>
					Dont have an account? <Link to='/signup'>Sign up here</Link>.
				</S.ParaSign>
			</S.LoginForm>
			<S.SignInButton href={process.env.REACT_APP_BASE_URL + "api/auth/google"}>
				<S.GoogleIcon src='https://cdn.iconscout.com/icon/free/png-256/google-470-675827.png' />
				Sign in with Google
			</S.SignInButton>
		</S.LoginContainer>
	);
};

export default LoginPage;
