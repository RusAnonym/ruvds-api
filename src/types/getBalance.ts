import { GlobalRequestParams, GlobalResponseParams } from "./main";

export interface GetBalanceRequestParams extends GlobalRequestParams {
	details?: boolean;
}

export interface GetBalanceResponseParams extends GlobalResponseParams {
	amount: number;
	currency: number;
	details?: {
		income: number;
		debited: number;
		items: Array<{
			type: number;
			dt: string;
			amount: number;
			currency: number;
			description: string;
		}>;
	};
}
