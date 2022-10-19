import { ApplicationProperties } from "./types";

const configEsBuild = require("../config/configEsBuild.json");
const config = require("../config/config.json");

export const build = (): ApplicationProperties => {
  return {
    bundlingOptions: {
      ...configEsBuild,
    },
    envName: config.envName,
    logDisableRedaction: config.logDisableRedaction,
    lambdaRuntime: {
      logRetentionInDays: config.logRetentionInDays,
      memorySize: config.memorySize,
      timeout: config.timeout,
    },
    logLevel: config.logLevel,
    region: config.region,
    stackName: `${config.stackName}-${config.envName}`,
  };
};
