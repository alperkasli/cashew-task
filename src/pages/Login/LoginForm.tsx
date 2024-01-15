import React, { useContext, useState } from "react";
import "./styles.scss";
import Input from "../../components/Input";
import { UserContext } from "../../store/user";
import { useNavigate } from "react-router-dom";
import { loginApi } from "../../services/loginService";

export function LoginForm() {
	const userStore = useContext(UserContext);
	const navigate = useNavigate();
	const [formData, setFormData] = useState({
		username: "",
		password: "",
	});
	const [loading, setLoading] = useState(false);
	const [loginError, setLoginError] = useState("");

	const handleChange = (e: any) => {
		const value = e.target.value;
		const name = e.target.name;
		setFormData((prevState) => ({
			...prevState,
			[name]: value,
		}));
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		const [res, error] = await loginApi({
			email: formData.username,
			password: formData.password,
		});
		if (error) {
			setLoginError(error);
			setLoading(false);
		} else {
			setLoading(true);
			userStore.signIn(formData.username, res.token);
			navigate("/");
		}
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
			{loginError !== "" && (
				<>
					<div className="login-error">{loginError}</div>
				</>
			)}
			<button type="submit" className="btn-block" disabled={loading}>
				LOGIN
			</button>
		</form>
	);
}
