import {
	GetBalanceResponseParams,
	GetBalanceRequestParams,
} from "./../types/getBalance";
import { callMethod } from "../lib/core";

export default async function getBalance(
	params: GetBalanceRequestParams,
): Promise<GetBalanceResponseParams> {
	params.details = params.details || false;
	return await callMethod("balance", {
		sessionToken: params.sessionToken,
		details: params.details ? 1 : 0,
	});
}
