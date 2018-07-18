// @flow
import { schedule } from 'node-cron';
import { hasDownedMonitor } from './helpers/uptimeHelpers';
import { getMonitors } from './api/uptimeApi';
import { MonitorResponse } from './models/uptimeModels';
import { sendAlarm, sendGood } from './helpers/statusHelpers';
import type { Monitor } from './models/uptimeModels';

const every5Minutes = '*/5 * * * *';

const handleStatusResponse = (response: MonitorResponse) => {
	if(hasDownedMonitor(response.monitors)) {
		return sendAlarm();
	}

	sendGood();
};

schedule(every5Minutes, () =>
	getMonitors().then(handleStatusResponse));