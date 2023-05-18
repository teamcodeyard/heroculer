import { Args, Command, Flags, ux } from '@oclif/core'
import parseConfig from '../../utils/config'
const util = require('util');
const exec = util.promisify(require('child_process').exec);
let dotenv = require('dotenv')
let fs = require('fs')

type EnvVariables = { [index: string]: string }[];

export default class Deploy extends Command {
  static description = 'Deploy your MoleculerJS services to Heroku'
  appName: string = ""
  static examples = [
    `$ `,
  ]

  static flags = {
    file: Flags.string({ char: 'f', description: 'Config file path', required: false }),
    services: Flags.string({ char: 's', description: 'Service names (separated with commas)', required: false }),
  }

  static args = {
  }

  async run(): Promise<void> {
    const { flags } = await this.parse(Deploy)
    const config = parseConfig(flags.file || './heroculer.yml')
    const servicesToDeploy = flags.services?.split(',')
    for (let service of config.services) {
      const serviceName = Object.keys(service)[0];
      if (servicesToDeploy && !servicesToDeploy.includes(serviceName)) {
        continue
      }
      const envVariables = service[serviceName].environment
      const envFilePath = service[serviceName].env_file
      this.appName = service[serviceName].app_name
      this.configEnvVariables(envFilePath, envVariables)
      ux.action.start(`Deployment for ${serviceName} microservice`, '', { stdout: true })
      try {
        const { stdout, stderr } = await exec(`git push ${serviceName}`)
        if (stdout) {
          this.log('🚀', stdout)
        } else if (stderr) {
          this.log('🚨', stderr)
        }
        ux.action.stop('✅ Deployed!')
      } catch (error: any) {
        ux.action.stop('🤯 Ooooh!')
        this.log(error)
      }
      this.scaleDynos(service[serviceName].processes || [])
    }
  }

  async scaleDynos(processes: []) {
    ux.action.start('Scaling dynos...')
    const scaleCommand = processes.map((x: any) => `${Object.keys(x)[0]}=${x[Object.keys(x)[0]]}`).join(' ')
    await exec(`heroku scale ${scaleCommand} -a ${this.appName}`)
    ux.action.stop('✅ Scaled!')
  }

  async configEnvVariables(envFilePath: string, envVariables: EnvVariables): Promise<void> {
    ux.action.start('Set environment variables...')
    const parsed = dotenv.parse(fs.readFileSync(envFilePath, { encoding: 'utf8' }))
    const variablesFromFile: EnvVariables = Object.entries(parsed).map(([k, v]) => ({ [k]: v })) as EnvVariables
    const mergedVariables = [...variablesFromFile, ...envVariables]
    for (let envVar of mergedVariables) {
      const envKey = Object.keys(envVar)[0]
      await exec(`heroku config:set ${envKey}=${envVar[envKey]} -a ${this.appName}`)
    }
    ux.action.stop('✅ Done!')
  }
}
