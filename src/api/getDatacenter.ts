import {
	GetDatacenterResponseParams,
	GetDatacenterRequestParams,
} from "./../types/getDatacenter";
import { callMethod } from "../lib/core";

export default async function getDatacenter(
	params: GetDatacenterRequestParams,
): Promise<GetDatacenterResponseParams> {
	return await callMethod("datacenter", {
		sessionToken: params.sessionToken,
		language: params.language,
	});
}
