import { GlobalResponseParams } from "./main";

export interface GetTokenRequestParams {
	key: string;
	username: string;
	password: string;
	endless?: boolean;
}

export interface GetTokenResponseParams extends GlobalResponseParams {
	sessionToken: string;
	expire: string | null;
}
