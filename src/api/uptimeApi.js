// @flow
import type { Monitor } from '../models/uptimeModels';
import rp from 'request-promise-native';

const apiUrl = 'https://api.uptimerobot.com/v2';

const getApiKey = () => {
	if(!process.env.API_KEY) {
		throw new Error('Environment variable API_KEY not set.');
	}

	return process.env.API_KEY;
};

export const getMonitors = () => rp({
	method: 'POST',
	url: `${apiUrl}/getMonitors`,
	body: { api_key: getApiKey() },
	json: true
});
