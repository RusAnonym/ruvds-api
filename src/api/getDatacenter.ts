import { callMethod } from "../lib/core";

export default async function getDatacenter(params: {
	sessionToken: string;
	language?: number;
}): Promise<{
	rejectReason: number;
	errMessage?: string;
}> {
	return await callMethod("datacenter", {
		sessionToken: params.sessionToken,
		language: params.language,
	});
}
