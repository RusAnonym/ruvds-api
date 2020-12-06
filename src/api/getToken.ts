import { callMethod } from "../lib/core";

export default async function getToken(params: {
	key: string;
	username: string;
	password: string;
	endless?: boolean;
}): Promise<{
	rejectReason: number;
	errMessage?: string;
	sessionToken: string;
	expire: string | null;
}> {
	params.endless = params.endless || false;
	return await callMethod("logon", {
		key: params.key,
		username: params.username,
		password: params.password,
		endless: params.endless ? 1 : 0,
	});
}
