// @flow
import type { Monitor, Status } from '../models/uptimeModels';

const STATUS_PAUSED = 0;
const STATUS_NOT_CHECKED = 1;
const STATUS_UP = 2;
const STATUS_SEEMS_DOWN = 8;
const STATUS_DOWN = 9;

const downStatuses = [STATUS_SEEMS_DOWN, STATUS_DOWN];

const isDown = (status: Status): boolean => downStatuses.includes(status);

export const hasDownedMonitor = (monitors: Monitor[]) =>
	monitors.filter(monitor => isDown(monitor.status));