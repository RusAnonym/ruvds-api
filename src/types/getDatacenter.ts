import { GlobalRequestParams, GlobalResponseParams } from "./main";

export interface GetDatacenterRequestParams extends GlobalRequestParams {
	language?: number;
}

export interface GetDatacenterResponseParams extends GlobalResponseParams {
	datacenters: Array<{
		id: number;
		name: string;
		tariffs: Array<{
			drives: Array<{
				usage: Array<number>;
				trial: number;
			}>;
		}>;
		driveTariffCombinations: Array<Array<number>>;
		trial: {
			price: number;
			cpu: number;
			ip: number;
		};
	}>;
}
