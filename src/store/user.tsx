import React, { createContext, useState } from "react";

interface IUser {
	username: string;
	email: string;
}

interface UserContextType {
	user: IUser | null;
	signIn: (username: string, password: string) => void;
	signOut: () => void;
}

export const UserContext = createContext<UserContextType>(null!);

export function UserProvider({ children }: { children: React.ReactNode }) {
	const [user, setUser] = useState<IUser | null>(null);

	const signIn = (username: string, password: string) => {
		// make call and set user
		setUser({ username: "test", email: "test" });
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
