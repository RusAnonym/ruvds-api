import { GlobalRequestParams, GlobalResponseParams } from "../main";

export interface ServerGetRequestParams extends GlobalRequestParams {
	userId?: number;
	fields: Array<"id" | "cpu" | "ram" | "vram" | "drive">;
	id: Array<number>;
}

export interface ServerGetResponseParams extends GlobalResponseParams {
	items: Array<{
		id: number;
		cpu: number;
		ram: number;
		vram: number;
		drive: Array<{
			type: number;
			capacity: number;
		}>;
		ip: {
			count: number;
			assigned: Array<string>;
		};
		premium: false;
		tariff: {
			premum: false;
			id: number;
			cpu: number;
			ram: number;
			vram: number;
			drive: {
				hdd: number;
				ssd: number;
			};
			ip: number;
			active: boolean;
		};
		priceRub: number;
		additionalServices: Array<{
			count: number;
			name: string;
			price: number;
			applyDiscount: boolean;
			monthIsMin: boolean;
		}>;
		paymentPeriod: number;
		discount: {
			paymentPeriod: number;
			promocode: number;
		};
		state: number;
		addDT: string;
		createDT: string;
		createProgress: number;
		createState: number;
		defaultAdminPassword: string;
		configurationUpdating: boolean;
		limitedTrafficMbps: number | null;
		running: boolean;
		paid: boolean;
		paidTill: string;
		stat: {
			traffic: {
				value: number;
				limit: number | null;
				state: number;
			};
			trafficOutbound: {
				value: number;
				limit: number | null;
				state: number;
			};
			trafficInbound: {
				value: number;
				limit: number | null;
				state: number;
			};
			driveRead: number;
			driveWritten: number;
			avgIOPS: number;
			avgCPU: number;
		};
		notifications: Array<{
			id: number;
			type: number;
			blocked: boolean;
			message: string;
			dt: string;
		}>;
		configurationChangeable: boolean;
		canRecreate: boolean;
	}>;
}
