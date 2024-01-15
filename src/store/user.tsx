import React, { createContext, useState } from "react";

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

	const signIn = async (username: string, token: string) => {
		setUser({ username, token });
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
