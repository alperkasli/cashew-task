import React, { useContext } from "react";
import { UserContext } from "../store/user";
import { Navigate } from "react-router";

export const AuthenticatedPage = ({ children }: { children: JSX.Element }) => {
	const userCtx = useContext(UserContext);
	const localUser = localStorage.getItem("user");

	// if not authenticated redirect to login
	if (!userCtx.user && !localUser) {
		return <Navigate to="/login" replace />;
	}

	// authenticated, return page compononent
	return children;
};
