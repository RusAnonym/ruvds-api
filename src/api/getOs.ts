import { GetOsRequestParams, GetOsResponseParams } from "./../types/getOs";
import { callMethod } from "../lib/core";

export default async function getOs(
	params: GetOsRequestParams,
): Promise<GetOsResponseParams> {
	return await callMethod("os", {
		sessionToken: params.sessionToken,
	});
}
