import { GlobalRequestParams, GlobalResponseParams } from "./main";

export interface GetTariffRequestParams extends GlobalRequestParams {
	tariffIds: Array<number>;
	driveTariffIds: Array<number>;
}

interface TariffConfigData {
	Name: string;
	CPU: number;
	RAM: number;
	VRAM: number;
	IP: number;
	Id: number;
	IsActive: boolean;
}

interface TariffDriveData {
	Id: number;
	Name: string;
	Type: number;
	Price: number;
	IsActive: boolean;
}

export interface GetTariffResponseParams extends GlobalResponseParams {
	tariffs: {
		Defaults: {
			PerMonth: {
				Config: string;
				Drive: string;
			};
		};
		PerMonth: {
			Config: Record<string, TariffConfigData>;
			Drive: Record<string, TariffDriveData>;
			ById: {
				Config: Record<string, TariffConfigData> | null;
				Drive: Record<string, TariffDriveData> | null;
			};
		};
	};
}
