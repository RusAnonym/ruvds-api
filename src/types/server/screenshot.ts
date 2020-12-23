import { GlobalRequestParams, GlobalResponseParams } from "../main";

export interface ServerScreenshotRequestParams extends GlobalRequestParams {
	id: number;
	width?: number;
	height?: number;
}

export interface ServerScreenshotResponseParams extends GlobalResponseParams {
	id: number;
	state: number;
	running: boolean;
	imageBase64: string;
}
