import { useState } from "react";
import * as S from "./SignUpPage.styles";
import { LOGIN } from "../../routes/constants";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../../auth/auth";

const initialErrorMessages = { passwordConfirmation: "", username: "" };
const SignupPage = () => {
	const navigate = useNavigate();
	const [username, setUsername] = useState("");
	const [password, setPassword] = useState("");
	const [passwordConfirmation, setPasswordConfirmation] = useState("");
	const [errors, setErrors] = useState(initialErrorMessages);

	const setErrorMessage = (field, message) => {
		setErrors((errors) => ({
			...errors,
			[field]: message,
		}));
		setTimeout(() => {
			setErrors(initialErrorMessages);
		}, 1500);
	};
	const handleSubmit = (event) => {
		event.preventDefault();
		if (password !== passwordConfirmation) {
			setErrorMessage("passwordConfirmation", "Password Doesn't Match");
			return;
		}
		register({
			username: username,
			password: password,
		})
			.then(() => {
				navigate("/login");
			})
			.catch((err) => {
				const { response } = err;
				if (response?.status === 409)
					setErrorMessage("username", response.data.message);
			});
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === "username") setUsername(value);
		else if (name === "password") setPassword(value);
		else if (name === "passwordConfirmation") setPasswordConfirmation(value);
	};

	return (
		<S.SignupContainer>
			<S.SignupForm onSubmit={handleSubmit}>
				<S.SignupTitle>Signup Page</S.SignupTitle>
				<S.SignupLabel htmlFor='username'>Username:</S.SignupLabel>
				<S.SignupInput
					type='text'
					id='username'
					name='username'
					value={username}
					onChange={(e) => handleChange(e)}
					required
					minLength='3'
				/>

				<S.SignupLabel htmlFor='password'>Password:</S.SignupLabel>
				<S.SignupInput
					type='password'
					id='password'
					name='password'
					minLength='6'
					value={password}
					onChange={(e) => handleChange(e)}
					required
				/>

				<S.SignupLabel htmlFor='passwordConfirmation'>
					Confirm Password:
				</S.SignupLabel>
				<S.SignupInput
					type='password'
					id='passwordConfirmation'
					name='passwordConfirmation'
					value={passwordConfirmation}
					onChange={handleChange}
					required
					minLength='6'
				/>

				<S.SignupButton type='submit'>Sign Up</S.SignupButton>
				<Link style={{ margin: "2% 0" }} to={LOGIN}>
					Login
				</Link>

				{Object.keys(errors).map(
					(error) =>
						errors[error] && (
							<S.ErrorMessage key={error}>{errors[error]}</S.ErrorMessage>
						)
				)}
			</S.SignupForm>
		</S.SignupContainer>
	);
};

export default SignupPage;
