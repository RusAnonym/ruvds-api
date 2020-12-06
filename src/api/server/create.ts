import { callMethod } from "../../lib/core";

export default async function create(params: {
	sessionToken: string;
	userId?: number;
    datacenter: number;
    
}): Promise<{
	rejectReason: number;
	errMessage?: string;
}> {
	return await callMethod("logon", {
		sessionToken: params.sessionToken,
	});
}
