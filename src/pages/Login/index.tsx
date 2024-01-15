import React from "react";
import "./styles.scss";
import { LoginForm } from "./LoginForm";

export function Login() {
	return (
		<div className="page container">
			<div className="login-wrapper">
				<h2>LOGIN</h2>
				<LoginForm />
			</div>
		</div>
	);
}
