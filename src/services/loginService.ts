const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

export const loginApi = async (params: { email: string; password: string }) => {
	const response = await fetch("https://reqres.in/api/login", {
		method: "POST",
		headers,
		body: JSON.stringify({ ...params }),
	});
	const content = await response.json();
	return content;
};
