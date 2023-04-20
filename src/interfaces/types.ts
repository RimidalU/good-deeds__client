export interface IUser {
	_id: string;
	name: string;
	nickName: string;
	email: string;
	password: string;
	deeps: IDeep[];
	frends: IUser[];
}

export interface IDeep {
	_id: string;
	name: string;
	description: string;
	status: "pending" | "in progress" | "done";
}
