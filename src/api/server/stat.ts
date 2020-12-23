import {
	ServerStatRequestParams,
	ServerStatResponseParams,
} from "./../../types/server/stat";
import { callMethod } from "../../lib/core";

export default async function get(
	params: ServerStatRequestParams,
): Promise<ServerStatResponseParams> {
	return await callMethod("server/stat", {
		sessionToken: params.sessionToken,
		id: params.id,
	});
}
