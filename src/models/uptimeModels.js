type Status = 0 | 1 | 2 | 8 | 9;

type Monitor = {
	id: number,
	friendly_name: string,
	url: string,
	type: number,
	sub_type: string,
	keyword_type: string | null,
	keyword_value: string,
	http_username: string,
	http_password: string,
	port: string,
	interval: number,
	status: Status,
	ssl: {
		brand: string,
		product: string,
		expires: number
	},
	create_datetime: number
};

export type MonitorResponse = {
	stat: string,
	pagination: object,
	monitors: Monitor[]
}