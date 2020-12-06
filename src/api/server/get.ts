import { callMethod } from "../../lib/core";
import {
	ServerGetResponseParams,
	ServerGetRequestParams,
} from "../../types/server/get";

export default async function get(
	params: ServerGetRequestParams,
): Promise<ServerGetResponseParams> {
	params.fields = params.fields || [];
	params.id = params.id || [];
	return await callMethod("servers", {
		sessionToken: params.sessionToken,
		userId: params.userId,
		fields: params.fields.join(),
		id: params.id.join(),
	});
}
