import { callMethod } from "../lib/core";

export default async function getBalance(params: {
	sessionToken: string;
	details?: boolean;
}): Promise<{
	rejectReason: number;
	errMessage?: string;
	amount: number;
	currency: number;
	details?: {
		income: number;
		debited: number;
		items: Array<{
			type: number;
			dt: string;
			amount: number;
			currency: number;
			description: string;
		}>;
	};
}> {
	params.details = params.details || false;
	return await callMethod("logon", {
		sessionToken: params.sessionToken,
		details: params.details ? 1 : 0,
	});
}
