import { GlobalRequestParams, GlobalResponseParams } from "../main";

export interface ServerStatRequestParams extends GlobalRequestParams {
	id: number;
}

export interface ServerStatResponseParams extends GlobalResponseParams {
	id: number;
	cpu: Array<{
		date: string;
		avgLoad: number;
	}>;
	drive: Array<{
		date: string;
		read: number;
		write: number;
		avgIOPS: number;
	}>;
	traffic: Array<{
		date: string;
		inbound: number;
		outbound: number;
	}>;
}
