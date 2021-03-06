import {
	GetTokenRequestParams,
	GetTokenResponseParams,
} from "./../types/getToken";
import { callMethod } from "../lib/core";

export default async function getToken(
	params: GetTokenRequestParams,
): Promise<GetTokenResponseParams> {
	params.endless = params.endless || false;
	return await callMethod("logon", {
		key: params.key,
		username: params.username,
		password: params.password,
		endless: params.endless ? 1 : 0,
	});
}
