export interface GlobalRequestParams {
	sessionToken: string;
}

export interface GlobalResponseParams {
	rejectReason: number;
	errMessage?: string;
}
