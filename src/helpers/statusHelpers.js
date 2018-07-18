const ALARM = 'ALARM';
const WARNING = 'WARNING';
const GOOD = 'GOOD';

type Status = ALARM | WARNING | GOOD;

let currentStatus = GOOD;

const isCurrentStatus = (status: Status): boolean => currentStatus === status;

const sendStatus = (status: Status) => {
	if(isCurrentStatus(status)) {
		console.log(`${status} already set`);
		return;
	}

	currentStatus = status;
	console.log(`sending ${status}`);
};

export const sendAlarm = () => sendStatus(ALARM);
export const sendWarning = () => sendStatus(WARNING);
export const sendGood = () => sendStatus(GOOD);