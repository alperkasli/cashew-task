import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Login } from "./pages/Login";
import { Dashboard } from "./pages/Dashboard";
import { AuthenticatedPage } from "./lib/AuthenticatedRoute";
import { UserProvider } from "./store/user";

function App() {
	return (
		<UserProvider>
			<BrowserRouter>
				<Routes>
					<Route path="login" element={<Login />} />
					<Route
						path="/"
						element={
							<AuthenticatedPage>
								<Dashboard />
							</AuthenticatedPage>
						}
					/>
				</Routes>
			</BrowserRouter>
		</UserProvider>
	);
}

export default App;
