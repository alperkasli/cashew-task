const headers = {
	Accept: "application/json",
	"Content-Type": "application/json",
};

export const loginApi = async (params: { email: string; password: string }) => {
	try {
		const response = await fetch("https://reqres.in/api/login", {
			method: "POST",
			headers,
			body: JSON.stringify({ ...params }),
		});
		const content = await response.json();
		// catch error cases
		if (response.status >= 400 && response.status < 600) {
			return [null, content.error];
		}
		// return succesfull res
		return [content, null];
	} catch (error) {
		return [null, error];
	}
};
