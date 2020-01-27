export class UserInfoModel
{
	guid: string;
	uid: number;
	first_name: string;
	last_name: string;
	email: string;
	username: string;
	password: string;
	token?: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
}
