import axios from "axios";

const API_URL = "https://ruvds.com/api/";

async function callMethod(method: string, params: any) {
	let outputData = await (
		await axios({
			url: API_URL + method,
			params: params,
		})
	).data;
	if (outputData.errMessage) {
		throw new Error(
			`Code: ${outputData.rejectReason} - ${outputData.errMessage}`,
		);
	} else {
		return outputData;
	}
}

export { callMethod };
