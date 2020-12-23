import {
	ServerScreenshotRequestParams,
	ServerScreenshotResponseParams,
} from "./../../types/server/screenshot";
import { callMethod } from "../../lib/core";

export default async function screenshot(
	params: ServerScreenshotRequestParams,
): Promise<ServerScreenshotResponseParams> {
	params.width = params.width || 640;
	params.height = params.height || 480;
	return await callMethod("server/image", {
		sessionToken: params.sessionToken,
		id: params.id,
		width: params.width,
		height: params.height,
	});
}
