import {
	GetTariffRequestParams,
	GetTariffResponseParams,
} from "./../types/getTariff";
import { callMethod } from "../lib/core";

export default async function getTariff(
	params: GetTariffRequestParams,
): Promise<GetTariffResponseParams> {
	return await callMethod("tariff", {
		sessionToken: params.sessionToken,
		tariffIds: params.tariffIds.join(),
		driveTariffIds: params.driveTariffIds.join(),
	});
}
