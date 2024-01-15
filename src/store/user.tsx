import React, { createContext, useEffect, useState } from "react";

export interface IUser {
	username: string;
	token: string;
}

interface UserContextType {
	user: IUser | null;
	signIn: (username: string, token: string) => void;
	signOut: () => void;
}

export const UserContext = createContext<UserContextType>(null!);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<IUser | null>(null);

	const signIn = (username: string, token: string) => {
		setUser({ username, token });
		localStorage.setItem("user", JSON.stringify({ username, token }));
	};

	const signOut = () => {
		setUser(null);
		localStorage.removeItem("user");
	};

	useEffect(() => {
		const localUser = localStorage.getItem("user");
		if (localUser) {
			setUser(JSON.parse(localUser));
		}
	}, []);

	return (
		<UserContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</UserContext.Provider>
	);
}
