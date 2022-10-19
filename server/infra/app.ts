import 'source-map-support/register'
import * as cdk from 'aws-cdk-lib'
import { ApplicationStack } from './applicationStack'
import { build } from './configBuilder'

const app = new cdk.App()

new ApplicationStack(app, build())

export {}