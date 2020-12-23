import {
	ServerCreateRequestParams,
	ServerCreateResponseParams,
} from "./../../types/server/create";
import { callMethod } from "../../lib/core";

export default async function create(
	params: ServerCreateRequestParams,
): Promise<ServerCreateResponseParams> {
	return await callMethod(
		"server/create",
		Object.assign(
			{
				sessionToken: params.sessionToken,
			},
			arguments,
		),
	);
}
