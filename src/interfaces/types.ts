export interface IUser {
	_id: string;
	name: string;
	nickName: string;
	email: string;
	password: string;
	deeds: IDeed[];
	frends: IUser[];
}

export interface IDeed {
	_id: string;
	name: string;
	description: string;
	status: "pending" | "in progress" | "done";
}
