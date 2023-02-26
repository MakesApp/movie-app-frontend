import React, { useState } from "react";
import * as S from "./SignUpPage.styles";

const SignupPage = () => {
	const [name, setName] = useState("");
	const [email, setEmail] = useState("");
	const [password, setPassword] = useState("");
	const [confirmPassword, setConfirmPassword] = useState("");
	const [errors, setErrors] = useState({});

	const handleSubmit = (event) => {
		event.preventDefault();
	};

	const handleChange = (event) => {
		const { name, value } = event.target;
		if (name === "name") setName(value);
		else if (name === "email") setEmail(value);
		else if (name === "password") setPassword(value);
		else if (name === "confirmPassword") setConfirmPassword(value);
	};

	return (
		<S.SignupContainer>
			<S.SignupForm onSubmit={handleSubmit}>
				<S.SignupTitle>Signup Page</S.SignupTitle>
				<S.SignupLabel htmlFor='name'>Name:</S.SignupLabel>
				<S.SignupInput
					type='text'
					id='name'
					name='name'
					value={name}
					onChange={handleChange}
					required
				/>
				{errors.name && (
					<S.SignupErrorMessage>{errors.name}</S.SignupErrorMessage>
				)}

				<S.SignupLabel htmlFor='email'>Email:</S.SignupLabel>
				<S.SignupInput
					type='email'
					id='email'
					name='email'
					value={email}
					onChange={handleChange}
					required
				/>
				{errors.email && (
					<S.SignupErrorMessage>{errors.email}</S.SignupErrorMessage>
				)}

				<S.SignupLabel htmlFor='password'>Password:</S.SignupLabel>
				<S.SignupInput
					type='password'
					id='password'
					name='password'
					value={password}
					onChange={handleChange}
					required
				/>
				{errors.password && (
					<S.SignupErrorMessage>{errors.password}</S.SignupErrorMessage>
				)}

				<S.SignupLabel htmlFor='confirmPassword'>
					Confirm Password:
				</S.SignupLabel>
				<S.SignupInput
					type='password'
					id='confirmPassword'
					name='confirmPassword'
					value={confirmPassword}
					onChange={handleChange}
					required
				/>
				{errors.confirmPassword && (
					<S.SignupErrorMessage>{errors.confirmPassword}</S.SignupErrorMessage>
				)}

				<S.SignupButton type='submit'>Sign Up</S.SignupButton>
			</S.SignupForm>
		</S.SignupContainer>
	);
};

export default SignupPage;
