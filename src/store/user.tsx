import React, { createContext, useState } from "react";
import { loginApi } from "../services/loginService";

export interface IUser {
	username: string;
	token: string;
}

interface UserContextType {
	user: IUser | null;
	signIn: (username: string, password: string) => void;
	signOut: () => void;
}

export const UserContext = createContext<UserContextType>(null!);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<IUser | null>(null);

	const signIn = async (username: string, password: string) => {
		const res = await loginApi({ email: username, password });
		console.log(res, "res---");
		setUser({ username, token: res.token });
	};

	const signOut = () => {
		setUser(null);
	};

	return (
		<UserContext.Provider value={{ user, signIn, signOut }}>
			{children}
		</UserContext.Provider>
	);
}
