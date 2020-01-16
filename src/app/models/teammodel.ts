export class teamModel
{
	guid: string;
	uid: string;
	team_name: string;
	division: string;
	wins: string;
	losses: string;

	constructor(obj: any = null)
	{
		if(obj != null)
		{
			Object.assign(this, obj);
		}
	}
} 