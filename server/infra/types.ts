import { StackProps } from 'aws-cdk-lib';
import { BundlingOptions } from 'aws-cdk-lib/aws-lambda-nodejs/lib/types';

export interface ApplicationProperties extends StackProps {
    bundlingOptions: BundlingOptions
    lambdaRuntime: LambdaRuntime
    region: string,
    stackName: string
    logLevel: string,
    logDisableRedaction: string,
    envName: string
}

export interface LambdaRuntime {
    memorySize: number
    timeout: number
    logRetentionInDays: number
}

