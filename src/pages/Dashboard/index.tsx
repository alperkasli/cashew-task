import React, { useContext } from "react";
import { UserContext } from "../../store/user";

export function Dashboard() {
	const userStore = useContext(UserContext);
	return (
		<div className="page container">Welcome {userStore.user?.username}</div>
	);
}
