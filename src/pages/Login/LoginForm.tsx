import React, { useContext, useState } from "react";
import "./styles.scss";
import Input from "../../components/Input";
import { UserContext } from "../../store/user";
import { useNavigate } from "react-router-dom";

export function LoginForm() {
	const userStore = useContext(UserContext);
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});

	const handleChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData, "--");
		userStore.signIn(formData.username, formData.password);
		navigate("/");
	};

	return (
		<form className="login-form" onSubmit={handleSubmit}>
			<Input
				type="text"
				name="username"
				value={formData.username}
				required
				onChange={handleChange}
				label="Username"
			/>
			<Input
				type="password"
				name="password"
				value={formData.password}
				label="Password"
				required
				onChange={handleChange}
			/>
			<button type="submit" className="btn-block">
				LOGIN
			</button>
		</form>
	);
}
