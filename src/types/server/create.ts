import { GlobalRequestParams, GlobalResponseParams } from "../main";

export interface ServerCreateRequestParams extends GlobalRequestParams {
	userId?: number;
	datacenter: number;
	tariff: number;
	os?: number;
	cpu: number;
	ram: number;
	vram: number;
	drivesCount: Array<Record<string, number>>;
	ip: number;
	ddosProtection?: number;
	template?: number;
	paymentPeriod: number;
	promocode?: string;
	promo?: string;
	computerName?: string;
}

export interface ServerCreateResponseParams extends GlobalResponseParams {
	id: string;
	cost: number;
}
