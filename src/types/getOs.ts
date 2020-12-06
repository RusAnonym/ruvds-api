import { GlobalRequestParams, GlobalResponseParams } from "./main";

export interface GetOsRequestParams extends GlobalRequestParams {}

export interface GetOsResponseParams extends GlobalResponseParams {
	os: Array<{
		Id: number;
		Name: string;
	}>;
}
