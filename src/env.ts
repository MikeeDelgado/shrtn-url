import * as dotenv from 'dotenv';
import * as path from 'path';

import { getOsEnv, getOsEnvOptional, normalizePort, toBool } from './lib/utils';

/**
 * Load .env file or for tests the .env.test file.
 */
dotenv.config({
	path: path.join(
		process.cwd(),
		`.env${process.env.NODE_ENV === 'test' ? '.test' : ''}`,
	),
});

/**
 * Environment variables
 */
export const env = {
	node: process.env.NODE_ENV || 'development',
	isProduction: process.env.NODE_ENV === 'production',
	isTest: process.env.NODE_ENV === 'test',
	isDevelopment: process.env.NODE_ENV === 'development',
	app: {
		name: getOsEnv('APP_NAME'),
		host: getOsEnv('APP_HOST'),
		schema: getOsEnv('APP_SCHEMA'),
		routePrefix: getOsEnv('APP_ROUTE_PREFIX'),
		port: normalizePort(process.env.PORT || getOsEnv('APP_PORT')),
		banner: toBool(getOsEnv('APP_BANNER')),
	},
	log: {
		level: getOsEnv('LOG_LEVEL'),
		json: toBool(getOsEnvOptional('LOG_JSON')),
		output: getOsEnv('LOG_OUTPUT'),
	},
};
