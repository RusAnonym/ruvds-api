import axios from "axios";

const API_URL = "https://ruvds.com/api/";

async function callMethod(method: string, params: any) {
	return await (
		await axios({
			url: API_URL + method,
			params: params,
		})
	).data;
}

export { callMethod };
