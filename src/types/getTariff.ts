import { GlobalRequestParams, GlobalResponseParams } from "./main";

export interface GetBalanceRequestParams extends GlobalRequestParams {
	tariffIds: Array<number>;
	driveTariffIds: Array<number>;
}

export interface GetBalanceResponseParams extends GlobalResponseParams {
	tariffs: {
		Defaults: {
			PerMonth: {
				Config: string;
				Drive: string;
			};
		};
	};
}
