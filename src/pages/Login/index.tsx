import React, { useContext } from "react";
import { UserContext } from "../../store/user";
import { useNavigate } from "react-router-dom";
import "./styles.scss";

export function Login() {
	const userCtx = useContext(UserContext);
	const navigate = useNavigate();
	const handleLogin = () => {
		userCtx.signIn("test", "test");
		navigate("/");
	};
	return (
		<div>
			login page
			<button className="button" onClick={handleLogin}>
				testlogin
			</button>
		</div>
	);
}
