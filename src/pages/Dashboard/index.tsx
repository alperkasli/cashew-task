import React, { useContext } from "react";
import { UserContext } from "../../store/user";
import "./styles.scss";

export function Dashboard() {
	const userStore = useContext(UserContext);
	return (
		<div className="page container flex-col">
			<div>Welcome {userStore.user?.username}</div>
			<div>
				<button className="signout-btn" onClick={userStore.signOut}>
					Sign Out{" "}
				</button>
			</div>
		</div>
	);
}
